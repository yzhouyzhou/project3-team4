const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  Patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  primaryDrInfo: {
    type: String,
    required: false
  },
  insuranceInfo: {
    type: String,
    required: false
  },
  ssn: {
    type: String,
    required: false
  }

});

// This creates our model from the above schema, using mongoose's model method
var profile = mongoose.model("profile", ProfileSchema);

// Export the Article model
module.exports = profile;


 