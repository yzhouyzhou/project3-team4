const router = require("express").Router();
const bookRoutes = require("./books");
const patientRoutes = require("./patients");
const emergencyRoutes = require("./emergency");
const lifechathistoryRoutes = require("./lifechathistories");
 
const smsRoutes = require("./sms");
 
const profileRoutes = require("./profile");

 

// All routes
router.use("/sms", smsRoutes);
router.use("/emergency", emergencyRoutes);
router.use("/books", bookRoutes);
router.use("/patients", patientRoutes);
router.use("/lifechathistories", lifechathistoryRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
