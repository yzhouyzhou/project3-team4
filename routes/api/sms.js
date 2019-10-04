const router = require("express").Router();
const smsController = require("../../controllers/smsController");

// Matches with "/api/books"
router.route("/")
  .post(smsController.findAll)


 

module.exports = router;
