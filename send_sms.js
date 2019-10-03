// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = process.env.ACCOUNTSID;
const authToken =  process.env.AUTHTOKEN ;
const twilioClient = require('twilio')(accountSid, authToken);
console.log(accountSid)

module.exports = function (text) {
  twilioClient.messages.create({
    to: '+17082289758',
    from: '+15203415491',
    body: text
  }).then(message => {
    console.log("Your alert message was sent successful", message.sid)
    res.json(message.sid)
  });

}