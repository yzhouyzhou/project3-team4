const router = require("express").Router();
const bookRoutes = require("./books");
const patientRoutes = require("./patients");
const lifechathistoryRoutes = require("./lifechathistory");


// All routes
router.use("/books", bookRoutes);
router.use("/patients", patientRoutes);
router.use("/lifechathistory", lifechathistoryRoutes);

module.exports = router;
