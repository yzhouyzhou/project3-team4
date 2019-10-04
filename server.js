require("dotenv").config({ path: ".env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Chatkit = require("@pusher/chatkit-server");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

const chatkit = new Chatkit.default({
  instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
  key: process.env.CHATKIT_SECRET_KEY
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/users", (req, res) => {
  console.log("user route hit");
  const { userId } = req.body;

  chatkit
    .createUser({
      id: userId,
      name: userId
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      if (err.error === "services/chatkit/user_already_exists") {
        console.log(`User already exists: ${userId}`);
        res.sendStatus(200);
      } else {
        console.log("error is here");
        res.status(err.status).json(err);
      }
    });
});

app.post("/authenticate", (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id
  });
  res.status(authData.status).send(authData.body);
});

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lifechat",  {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect(process.env.MONGODB_URI || "mongodb://project3:project3@ds143245.mlab.com:43245/heroku_t6n4mrws",  {useNewUrlParser: true});


 

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// app.set('port', process.env.PORT || 3001);
// const server = app.listen(app.get('port'), () => {
//   console.log(`Express running → PORT ${server.address().port}`);
// });
