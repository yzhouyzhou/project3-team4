const router = require("express").Router();
const lifechathistoryController = require("../../controllers/lifechathistoriesController");

// Matches with "/api/patients"
router.route("/")
  .get(lifechathistoryController.findAll)
  .post(lifechathistoryController.create);


module.exports = router;
