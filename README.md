Run npm install

Run node server.js

NPM Packages:
express
uuid/v1
mongodb
fs

Naming conventions:
JavaScript - Camel Case: https://www.w3schools.com/js/js_conventions.asp
MongoDB - Camel Case: http://arkusnexus.com/2016/09/12/coding-guidelines-mongodb/

Some Notes: 
-Database Choice: I chose mongoDB because none of the data I am working with has any relationships.
-If the app has trouble connecting to mongo, it will immediately shut down
-mongo_settings.json: JSON file for database dependency. Should be .gitignored in production because you do not want to display any sensitive information... in this case it is okay.
-input_validation.js: modularize the codebase
-POST /profile/new
	-Will not insert the data if username already exists (Logical choice)
-GET /profile/:id
	-Assumed id = uuid