// Include Server Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const dotenv = require('dotenv').config();
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

//                                              Mongo & Mongoose Connections
const mongoose = require("mongoose");

//Schemas to be used
var Survey = require("./server/models/Survey.js");

// Database configuration with mongoose
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("openURI", function() {
  console.log("Mongoose connection successful.");
});


// Serve up static assets if in production (running on Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
//API routes
const routes = require("./server/controllers/API");
app.use("/", routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
