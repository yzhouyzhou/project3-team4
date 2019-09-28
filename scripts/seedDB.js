const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(
 process.env.MONGODB_URI ||
 "mongodb://localhost/lifechat"
);
const patientSeed = [
 {
   name: "TTT",
   email: "TTT@test.com",
   password: "TTT",
   phone: "1111111",
   address: "1111111",
   primaryDrInfo: "1111111",
   insuranceInfo: "1111111",
   ssn: "",
   lifechathistory: [],
   date: new Date(Date.now())
 }
];
db.Patient.collection.insertMany(patientSeed)
 .then(data => {
   console.log(data.result.n + " records inserted!");
   // process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });
const lifechathistorySeed = [
 {
   chathistory:"hello",
   patientID: "5d83c22b2557921040595f6b",
   date: new Date(Date.now())
 },
];
db.lifechathistory
 .remove({})
 .then(() => db.lifechathistory.collection.insertMany(lifechathistorySeed))
 .then(data => {
   console.log(data.result.n + " records inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });