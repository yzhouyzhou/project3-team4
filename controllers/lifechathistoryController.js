const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Lifechathistory
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.Lifechathistory
  //     .findById(req.params.id)
  //     .populate("Lifechathistory")
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function (req, res) {
    console.log("create for user ", req.body);
    db.Patient
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("create chat for user ", req.body);
    db.Lifechathistory
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

  // update: function(req, res) {
  //   db.Lifechathistory
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Lifechathistory
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
