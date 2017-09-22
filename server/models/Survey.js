// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const SurveySchema = new Schema({
  // title is a required string
  "surveyTitle": {
    type: String,
    required: true
  },
  // link is a required string
  "beerShowcase": {
    type: [],
    required: true
  }
});

// Create the Survey model with the SurveySchema
let Survey = mongoose.model("Survey", SurveySchema);

// Export the model
module.exports = Survey;
