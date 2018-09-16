var ObjectID = require('bson-objectid');

module.exports = {
  "someserver": {
    "databases": {
      "mock_database": {
        "collections": [
          {
            "name": "system.namespaces",
            "documents": [
              {
                "name": "system.indexes"
              }
            ]
          },
          {
            "name": "system.indexes",
            "documents": []
          }
        ]
      },
      "EY_test": {
        "collections": [
          {
            "name": "system.namespaces",
            "documents": [
              {
                "name": "system.indexes"
              },
              {
                "name": "user profiles"
              }
            ]
          },
          {
            "name": "system.indexes",
            "documents": [
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "EY_test.user profiles",
                "name": "_id_",
                "unique": true
              }
            ]
          },
          {
            "name": "user profiles",
            "documents": [
              {
                "userName": "johndoe1",
                "firstName": "John",
                "lastName": "Doe",
                "age": 32,
                "uuid": "4bef70d0-b9c1-11e8-b7cc-4bdef4ef6b65",
                "_id": ObjectID("5b9e702035a207084de0b222")
              }
            ]
          }
        ]
      }
    }
  }
}