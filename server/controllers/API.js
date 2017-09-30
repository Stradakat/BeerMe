/*
http://sites.bu.edu/perryd/2017/07/11/composing-the-results-of-nested-asynchronous-calls-in-javascript/
https://gist.github.com/pdonham/8d2c7e0ccd482150a6877b5075794b23
https://stackoverflow.com/questions/18983138/callback-after-all-asynchronous-foreach-callbacks-are-completed
*/
const express = require('express');
const router = express.Router();
//const dotenv = require('dotenv').config();
const request = require('request');
const Survey = require('../models/Survey');
const brewerydb_URL = "https://api.brewerydb.com/v2";
const async = require('async');
const fetch = require('node-fetch');
const path = require('path');
let beerQuestions = [];

// API routes to run server side data
router.get("/API/recommendations", function(req, res) {
	var url = `https://api.brewerydb.com/v2/search?q=corona&withBreweries=y&key=${process.env.BREWERY_DB}&format=json`;
	request(url, function(error, response, body) {
		var package = JSON.parse(response.body)
		res.send(package);
	});	
});

router.get("/API/survey4", function(req, res){
	let toTry = [{
		type: "Random Beer",
		recs: [{
				name: "01",
				like: 0,
				pic: "https://dydza6t6xitx6.cloudfront.net/ci_1143.jpg",
				reviewed: false
			},
			{
				name: "02",
				like: 0,
				pic: "http://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_112699.jpg",
				reviewed: false
			},
			{
				name: "Budweiser",
				like: 0,
				pic: "https://dydza6t6xitx6.cloudfront.net/ci_2822.jpg",
				reviewed: false
			},
			{
				name: "Bud Light",
				like: 0,
				pic: "http://www.totalwine.com/media/sys_master/twmmedia/h78/hf8/9770809884702.png",
				reviewed: false
			},
			{
				name: "Coors",
				like: 4,
				pic: "https://onlinecashandcarry.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sol_beer_nrb_330ml.jpg",
				reviewed: false
			}]
	}]
	res.json(toTry);
})
	
router.get("/API/survey3", function(req, res){
	let beerShowcase = [];
	async.waterfall([
		function getBeers_func(next) {
			Survey.find({})
			.then(function(doc){
//				console.log(doc)
				next(null, doc)
			});
		},
		function buildQuestions_func(doc, next) {

			async function buildQuestions_subFunction() {
				let beerGrouping = doc[0].beerShowcase[0];
				for (const beerGroup of beerGrouping) {
					let beerListing = beerGroup.beer;
					let beerShowcaseItems = [];
					for (const beerID of beerListing){
						const response = await fetch(`${brewerydb_URL}/beers?key=${process.env.BREWERY_DB}&ids=${beerID}&format=json`)
						const beerDetail = await response.json();
						const detail = {
							"name": beerDetail.data[0].name,
							"id": beerDetail.data[0].id,
							"like": 4,
							"pic": beerDetail.data[0].labels.large,
							"reviewed": false
						}
						beerShowcaseItems.push(detail);
					}
					let beerShowcaseGrouping = {
						"beerShowcaseName": beerGroup.category,
						"beerShowcaseItems": beerShowcaseItems
					}
					beerShowcase.push(beerShowcaseGrouping);
					console.log(beerShowcaseGrouping)
				}
			}
			buildQuestions_subFunction().then(function(){
				next(beerShowcase)
			})
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

router.get("/API/test", function(req, res) {
	Survey.find({})
	.then(function(doc) {
		res.json(doc);
	}).catch(function(err) {
		res.json(err);
	});
});

router.get("/API/testJSON", function(req, res) {
	res.sendFile(path.join(__dirname, "response.json"));
});

router.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./../../client/build/index.html"));
});

// Export routes for server.js to use.
module.exports = router;