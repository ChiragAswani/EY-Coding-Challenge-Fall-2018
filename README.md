Run ```npm install``` to install node modules

Run node server.js

NPM Packages:
- express
- uuid/v1
- mongodb
- fs

To import:
- postman endpoints: test GET and POST commands
- user profiles: user profiles collection to import into the EY mongodb 

What to test for:
- Bad URL to Mongo -> server should shut down
- Bad key parameters to /profile/new -> 422 status
- Bad value parameters to /profile/new -> 422 status
- Username already exists to /profile/new -> 409 status
- Good key, value parameters to /profile/new -> 200 status
- UUID in collection -> 200 status
- UUID not in collection -> 404 status

Naming conventions:
- JavaScript - Camel Case
- https://www.w3schools.com/js/js_conventions.asp
- MongoDB - Camel Case
- http://arkusnexus.com/2016/09/12/coding-guidelines-mongodb/

Some Notes: 
- Database Choice- I chose mongoDB because none of the data I am working with has any relationships.
- If the app has trouble connecting to mongo, it will immediately shut down
- mongo_settings.json- JSON file for database dependency. Should be .gitignored in production because you do not want to display any sensitive information... in this case it is okay.
- input_validation.js- modularize the codebase
- POST /profile/new- will not insert the data if username already exists (Logical choice)
- GET /profile/:id- Assumed id = uuid