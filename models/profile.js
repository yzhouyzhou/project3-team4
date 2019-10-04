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

module.exports = Profile = mongoose.model('profile', ProfileSchema);