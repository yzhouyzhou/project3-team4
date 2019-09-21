const router = require("express").Router();
const patientsController = require("../../controllers/patientsController");

// Matches with "/api/patients"
router.route("/")
  .get(patientsController.findAll)
  .post(patientsController.create);

// Matches with "/api/patients/:id"
router
  .route("/:id")
  .get(patientsController.findById)
  .put(patientsController.update)
  .delete(patientsController.remove);

router
  .route("/one")
  .get(patientsController.findOne);

module.exports = router;
