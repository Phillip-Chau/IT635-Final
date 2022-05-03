db = db.getSiblingDB("appInventory")

db.createCollection("applications", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "appName", "businessCategorization"],
      properties: {
        appName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        // we make use of MongoDBs ability to store nested objects
        businessCategorization: {
          bsonType: "object",
          required: [ "categorization", "dataClass"],
          properties: {
            // this is an optional property for extra street information (apartment number, etc)
            additional: {
              bsonType: "string",
              description: "must be a string if the field exists"
            },
            categorization: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            dataClass: {
              bsonType: "string",
              description: "must be a string and is required"
            }
          }
        }
      }
    }
  }
})

db.createCollection("employees")
db.createCollection("server")
db.createCollection("applications")