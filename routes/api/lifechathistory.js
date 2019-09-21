const router = require("express").Router();
const lifechathistoryController = require("../../controllers/lifechathistoryController");

// Matches with "/api/patients"
router.route("/")
  .get(lifechathistoryController.findAll)
  .post(lifechathistoryController.create);

// Matches with "/api/patients/:id"
// router
//   .route("/:id")
//   .get(lifechathistoryController.findById)
//   .put(lifechathistoryController.update)
//   .delete(lifechathistoryController.remove);

module.exports = router;
