const router = require("express").Router();
const bookRoutes = require("./books");
const patientRoutes = require("./patients");
const lifechathistoryRoutes = require("./lifechathistories");


// All routes
router.use("/books", bookRoutes);
router.use("/patients", patientRoutes);
router.use("/lifechathistories", lifechathistoryRoutes);

module.exports = router;
