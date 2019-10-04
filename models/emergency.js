const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emergencySchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String  },
  phonenumber: { type: String, required: true },
  socialsecurity: { type: String, required: true },
  personaladdress: { type: String, required: true },
  scheduleddoctor: { type: String, required: true },
  hospitaladdress: { type: String, required: true },
  appointmentdate: { type: String  },
  appointmenttime: { type: String },
  commentsone: { type: String, required: true },
  commentstwo: { type: String, required: true }
});

const emergency = mongoose.model("emergency", emergencySchema);

module.exports = emergency;
