const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TODOs', (err, client) => {
  if (err) {
    console.log('Unable to connect to mongodb' + err);
  } else {
    console.log('Connected to MongoDB server');
  }
  const db = client.db('TODOs')
  db.collection('Users').insertOne({
    name: 'Vijay',
    age: 25,
    location: 'Hyderabad'
  }, (err, result) {
    if(err) {
      console.log('Unable to insert data');
    } else {
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  })
  client.close();
})