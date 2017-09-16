const express = require("express");
const router = express.Router();
const dotenv = require('dotenv').config();
const request = require("request");

// API routes to run server side data
router.get("/API/recommendations", function(req, res) {
	var url = `https://api.brewerydb.com/v2/search?q=corona&withBreweries=y&key=${process.env.BREWERY_DB}&format=json`;
	request(url, function(error, response, body) {
		var package = JSON.parse(response.body)
		res.send(package);
	});	
});
router.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./../../client/build/index.html"));
});

// Export routes for server.js to use.
module.exports = router;