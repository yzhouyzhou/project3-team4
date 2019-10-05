const db = require("../models");

// Defining methods for the profileController
module.exports = {
  findAll: function (req, res) {
    db.profile
      .find(req.query)
      .populate("patient")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.profile
      .findById(req.params.id)
      .populate("patient")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    console.log("for login", req.query);
    db.profile
      .findOne(req.query)
      .populate("patient")
      .then(dbModel => {
        console.log("data", dbModel)
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("create for user ", req.body);
    db.profile
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.profile
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.profile
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
