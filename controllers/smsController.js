 

require("dotenv").config({ path: ".env" });
const accountSid = process.env.ACCOUNTSID;
const authToken =  process.env.AUTHTOKEN ;
const twilioClient = require('twilio')(accountSid, authToken);
console.log(accountSid)

// Defining methods for the booksController
module.exports = {


  findAll: function(req, res) {
  
  console.log(req.body)
    twilioClient.messages.create({
      to: '+17082289758',
      from: '+15203415491',
      body: req.body.text
    }).then(message => {
      console.log("Your alert message was sent successful", message.sid)
       res.json(message.sid)
    })
  } 
};
