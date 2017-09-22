/*
http://sites.bu.edu/perryd/2017/07/11/composing-the-results-of-nested-asynchronous-calls-in-javascript/
https://gist.github.com/pdonham/8d2c7e0ccd482150a6877b5075794b23
https://stackoverflow.com/questions/18983138/callback-after-all-asynchronous-foreach-callbacks-are-completed
*/
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();
const request = require('request');
const Survey = require('../models/Survey');
const brewerydb_URL = "https://api.brewerydb.com/v2";
const async = require('async');
let beerQuestions = [];

// API routes to run server side data
router.get("/API/recommendations", function(req, res) {
	var url = `https://api.brewerydb.com/v2/search?q=corona&withBreweries=y&key=${process.env.BREWERY_DB}&format=json`;
	request(url, function(error, response, body) {
		var package = JSON.parse(response.body)
		res.send(package);
	});	
});

router.get("/API/survey3", function(req, res){
	let beerShowcase = [];
	async.waterfall([
		function getBeers_func(next) {
			Survey.find({})
			.then(function(doc){
				next(null, doc)
			});
		},
		function buildQuestions_func(doc, next) {
			let beerListing = doc[0].beerShowcase;

			async.map(beerListing, beerDetails.bind(beerDetails), function(err, result){
			})
			console.log(beerListing)
			
			/*
			async.eachLimit(beerListing, function(item, callback){
				console.log(item)
//				detail = `console.log(${item})`
				detail = (function(item){
					let url = `${brewerydb_URL}/beers?key=${process.env.BREWERY_DB}&ids=${beerID}&format=json`;
					return url
				})
				beerShowcase.push(detail)
				callback();
//				beerDetails(item)	
			}, function(err){
				if(err) {
					console.log("error")
				}
				else {
					return beerShowcase
				}
			})
*/
			next(null, beerShowcase)
			const beerDetails = (beerID) => {
				let beerDetail;
				let url = `${brewerydb_URL}/beers?key=${process.env.BREWERY_DB}&ids=${beerID}&format=json`;
				console.log(url)
				return url
/*
				request(url, function(error, response, body){
					console.log(body)
					return body;
				}); 
*/
			};
		}
		],
		function asyncComplete(err) {
			if (err) {
				res.json(err);
			}
			else {
				res.json(beerShowcase);
			}
		}
	)
});	

router.get("/API/survey", function(req, res) {
	let counter = 0;
	Survey.find({})
	.then(function(doc) {
		let beerShowcase = doc[0].beerShowcase;
		//async(array, iterator, callback)
		async.each(beerShowcase, function(item, callback){
			beerDetails(item);
			callback();
		},
		function(err){
			if(err) {
				res.json(err);
			}
			res.json(beerQuestions);
		})
	}).catch(function(err) {
		res.json(err);
	});

	const beerDetails = (beerID) => {
		let beerDetail;
		let url = `${brewerydb_URL}/beers?key=${process.env.BREWERY_DB}&ids=${beerID}&format=json`;
		request(url, function(error, response, body){
			beerObj(body)
			.then(function(){
				addBeer(beerDetail);
			});
		}); 
	};

	const addBeer = (beer) => {
		beerQuestions.push(beer)
	}

	const beerObj = (requestBody) => {
		let package = JSON.parse(requestBody);
		if (typeof package.data != 'undefined'){
			return {
				"id": package.data[0].id,
				"name": package.data[0].name
			}
		}
	}
});

router.post("/API/survey", function(req, res) {
	var surveyScaffold = req.body;
	Survey.create(surveyScaffold).then(function(doc) {
			res.json(doc);
	  }).catch(function(err) {
			res.json(err);
	  });
});

router.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./../../client/build/index.html"));
});

// Export routes for server.js to use.
module.exports = router;