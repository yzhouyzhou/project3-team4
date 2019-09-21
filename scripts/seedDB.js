const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/lifechat"
);

const lifechathistorySeed = [ 
  {
    chathistory:"hello",
    patientID: "5d83c22b2557921040595f6b",
    date: new Date(Date.now())
  },
 
];

db.Lifechathistory
  .remove({})
  .then(() => db.Lifechathistory.collection.insertMany(lifechathistorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
