const router = require("express").Router();
const patientsController = require("../../controllers/patientsController");

// Matches with "/api/patients"
router
  .route("/")
  .post(patientsController.create)
  .get(patientsController.findOne);

// Matches with "/api/patients"
router.route("/all").get(patientsController.findAll);
// Matches with "/api/patients/:id"
router
  .route("/:id")
  .get(patientsController.findById)
  .put(patientsController.update)
  .delete(patientsController.remove);

// router
//   .route("/one")
//   .get(patientsController.findOne);

module.exports = router;
