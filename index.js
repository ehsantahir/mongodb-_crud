const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

const myInsertOperation = async () => {
   try {
       await client.connect();
       const database = client.db('my_notebook');
       const collection = database.collection('students');

       const result = await collection.insertOne({
           name: 'Shehryar',
           father_name: 'XYZ',
           age: '28'
       });

       console.log(result);
   } catch (err) {
       console.log(err);
   }
}

myInsertOperation();