var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var PatientSchema = new Schema({
  // `title` is required and of type String
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
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  lifechathistory: [{
    type: Schema.Types.ObjectId,
    ref: "lifechathistory"
  }]
});

// This creates our model from the above schema, using mongoose's model method
var Patient = mongoose.model("Patient", PatientSchema);

// Export the Article model
module.exports = Patient;
