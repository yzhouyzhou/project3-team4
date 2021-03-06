import axios from "axios";


export default {
  send_sms: function (text) {
    return axios.post("/api/sms", text);
    
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },

    // Saves a book to the database
    saveProfile: function (profileData) {
      console.log(profileData)
      return axios.post("/api/profile", profileData);
    },

    
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  // Saves a book to the database
  saveEmergency: function (emergencyData) {
    console.log(emergencyData)
    return axios.post("/api/emergency", emergencyData);
  },

  getPatients: function () {
    console.log("getPatients ");
    return axios.get("/api/patients/all");
  },
  // Gets the patient with the given id
  getPatient: function (id) {
    console.log("getPatient ", id);
    return axios.get("/api/patients/" + id);
  },
  // Gets the patient with the given email
  getPatientByEmail: function (emailData) {
    console.log("getPatientByEmail ", emailData);
    return axios.get("/api/patients", { params: { email:  emailData} });
  },

  savePatient: function (patientData) {
    console.log("savePatient ", patientData);
    return axios.post("/api/patients", patientData);
  },

  savePatientChat: function (patientChatData) {
    console.log("chat here ", patientChatData);
    return axios.post("/api/lifechathistories", patientChatData);
  }
};
