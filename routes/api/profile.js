const router = require("express").Router();
const booksController = require("../../controllers/profileController");

// Matches with "/api/profile"
router.route("/")
  .get(profileController.findAll)
  .post(profileController.create);

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(profileController.findById)
  .put(profileController.update)
  // .delete(booksController.remove);

module.exports = router;
