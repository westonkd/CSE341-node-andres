const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
dotenv.config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const uri =
  "mongodb+srv://andresfm:Brazil1234@week2.9qkzfpi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// Database Name
const dbName = "contacts";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("contacts");

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(function () {
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  })
  .catch(console.error)
  .finally(() => client.close());
