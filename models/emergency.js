const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emergencySchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  phonenumber: { type: String },
  socialsecurity: { type: String },
  personaladdress: { type: String },
  scheduleddoctor: { type: String },
  hospitaladdress: { type: String },
  appointmentdate: { type: String, required: true },
  commentsone: { type: String },
  commentstwo: { type: String }
});

const emergency = mongoose.model("emergency", emergencySchema);

module.exports = emergency;
