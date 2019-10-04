const router = require("express").Router();
const emergencyController = require("../../controllers/emergencyController");

// Matches with "/api/emergency/"
router.route("/")
  .get(emergencyController.findAll)
  .post(emergencyController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(emergencyController.findById)
  .put(emergencyController.update)
  .delete(emergencyController.remove);

module.exports = router;
