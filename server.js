//npm packages
const express = require('express');
const uuidv1 = require('uuid/v1');
const mongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const validation = require('./input_validation');

//constants
const app = express();
const databaseConnection = JSON.parse(fs.readFileSync('mongo_settings.json', 'utf8'));

//start express server
const server = app.listen(3000, () => console.log('Listening on Port 3000'));

mongoClient.connect(databaseConnection.dbURL, {useNewUrlParser: true}, function(err, client) {
	
	//Shutdown server if there is an error connecting to MongoDb
	if (err) {
		console.log("Unable to connect to MongoDB\nPlease ensure mongod is running and the url is correct");
		server.close(() => console.log("Shutting down...."));
		return;
	}

	//Connect to database and collection
	console.log("Sucessfully connected to MongoDB");
	const db = client.db(databaseConnection.dbName);
	const collection = db.collection(databaseConnection.collectionName);

	//Creates the Profile entity
  	app.post('/profile/new', function(req, res) {

  		//Retrieve params
  		const userName = req.query.username;
  		const firstName = req.query.first_name;
  		const lastName = req.query.last_name;
  		const age = req.query.age;

  		//Generates uuid timestamp
  		const uuid = uuidv1();
  		
  		//Validates Inputs
  		if(validation.isValidUserName(userName) && validation.isValidFirstOrLastName(firstName) && validation.isValidFirstOrLastName(lastName) && validation.isValidAge(age)) {
	  			collection.findOne({userName}, function(err, document) {
	  				//if username not in collection - insert
				  	if (document === null) { 
				  		collection.insertOne({userName, firstName, lastName, age, uuid});
				  		res.status(200); //ok
				  		res.send({userName, firstName, lastName, age, uuid});
				  	} 
				  	//username already in collection - do not insert
				  	else { 
				  		res.status(409); //conflict
				  		res.send("Username already in collection");
				  	}
				});
  		}
  		//Invalid Input 
		else { 
			res.status(422); //unprocessable entity
			res.send("Invalid Parameters")
		}
	})

	//Retrieves username, first name, last name, age if the user exists in the data source.
	app.get('/profile/:id', function(req, res) {

		//Retrieve params
  		const uuid = req.params.id;
  		
  		collection.findOne({uuid}, function(err, document) {

  			//if uuid not in collection - 404
		  	if (document === null) {
		  		res.status(404); //not found
		  		res.send("UUID Not Found");
		  	} 
		  	//uuid in collection - display data
		  	else {
		  		delete document._id; //do not show _id
		  		delete document.uuid; //do not uuid
		  		res.status(200); //ok
		  		res.send(document);
		  	}
		});
	})
});


