const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.lifechathistory
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("create chat for user ", req.body);
    db.lifechathistory
      .create(req.body)
      .then(dbChat => {
        console.log("dbchat ", dbChat);
        db.Patient.findOneAndUpdate(
          { _id: req.body.patientId },
          { $push: { lifechathistory: dbChat._id } },
          { new: true, useFindAndModify: false }
        )
          .then(function (dbPatient) {
            console.log("update patient", dbPatient);
            res.end();
          })
      })
      .catch(err => res.status(422).json(err));
  }

};
