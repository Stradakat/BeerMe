import { combineReducers } from 'redux';
import {REQUEST_BEERS, RECEIVE_BEERS, REQUEST_BREWERY, RECEIVE_BREWERY} from '../actions/index';

const initialState = {
	"beers": [],
	"breweryDetails": {
			"id" : "CJ7aEv",
			"name" : "BJ's Restaurant and Brewery",
			"nameShortDisplay" : "BJ's Restaurant",
			"description" : "To brew consistently great beer in a variety of ale and lager styles. That's really what BJ's beer is all about.\r\n\r\nAt BJ's we recognize that brewing is both an art and a science.\r\n\r\nWe also respect the vast variety of beer styles that the world has to offer - from the delicate balance of German Kolsch to the robust intensity of Russian Imperial Stout.\r\n\r\nOur Passionate and talented team of brewers strives toward one simple goal: to brew consistently great beer in a variety of ale and lager styles. That's really what BJ's beer is all about.",
			"website" : "http://www.bjsrestaurants.com/",
			"established" : "1978",
			"isOrganic" : "N",
			"images" : {
				"icon" : "https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-icon.png",
				"medium" : "https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-medium.png",
				"large" : "https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-large.png",
				"squareMedium" : "https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-squareMedium.png",
				"squareLarge" : "https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-squareLarge.png"
			},
			"status" : "verified",
			"statusDisplay" : "Verified",
			"createDate" : "2012-01-03 02:41:46",
			"updateDate" : "2017-06-28 13:39:08",
			"isMassOwned" : "N",
			"brandClassification" : "craft"
	},
	"beerListing": [],
	"loading": false,
	"user": {
		"uid": null
	}, 
	"error": null,
	"chosenModal": {},
	"visible": false,
	"toTry": [
		[{	"type": "Random Beer",
			"recs": [
				{	"name": "PBR",
					"like": 4,
					"pic": "https://dydza6t6xitx6.cloudfront.net/ci_1143.jpg",
					"reviewed": false },
				{	"name": "Duff",
					"like": 3,
					"pic": "http://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_112699.jpg",
					"reviewed": false },
				{	"name": "Budweiser",
					"like": 2,
					"pic": "https://dydza6t6xitx6.cloudfront.net/ci_2822.jpg",
					"reviewed": false},
				{	"name": "Bud Light",
					"like": 5,
					"pic": "http://www.totalwine.com/media/sys_master/twmmedia/h78/hf8/9770809884702.png",
					"reviewed": false},
				{	"name": "Coors",
					"like": 4,
					"pic": "https://onlinecashandcarry.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sol_beer_nrb_330ml.jpg",
					"reviewed": false
			}]
		}]
	]
}

const requestItems = (state = initialState, action) => {
	let beers;
	let breweries;
	let toTry;
	let beerListing;

	switch (action.type) {
		case REQUEST_BEERS:
			return {...state, loading: true}
		case REQUEST_BREWERY:
			return {...state, loading: true}
		default:
			return state
	}
}

const receiveItems = (state = initialState, action) => {
	let beers;
	let breweryDetails= {"message":"READ ONLY MODE: Request Successful","data":{"id":"CJ7aEv","name":"BJ's Restaurant and Brewery","nameShortDisplay":"BJ's Restaurant","description":"To brew consistently great beer in a variety of ale and lager styles. That's really what BJ's beer is all about.\r\n\r\nAt BJ's we recognize that brewing is both an art and a science.\r\n\r\nWe also respect the vast variety of beer styles that the world has to offer - from the delicate balance of German Kolsch to the robust intensity of Russian Imperial Stout.\r\n\r\nOur Passionate and talented team of brewers strives toward one simple goal: to brew consistently great beer in a variety of ale and lager styles. That's really what BJ's beer is all about.","website":"http://www.bjsrestaurants.com/","established":"1978","isOrganic":"N","images":{"icon":"https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-icon.png","medium":"https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-medium.png","large":"https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-large.png","squareMedium":"https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-squareMedium.png","squareLarge":"https://s3.amazonaws.com/brewerydbapi/brewery/CJ7aEv/upload_Z20fd8-squareLarge.png"},"status":"verified","statusDisplay":"Verified","createDate":"2012-01-03 02:41:46","updateDate":"2017-06-28 13:39:08","isMassOwned":"N","brandClassification":"craft"},"status":"success"};
	let toTry;
	let beerListing;
	
	switch (action.type) {
		case RECEIVE_BEERS:
			beerListing = action.payload;
			toTry= [action.payload]
			return {...state, loading: true, beerListing: beerListing, toTry: toTry}
	  case RECEIVE_BREWERY:
			breweryDetails = action.payload.data;
//			console.log("breweryDetails = ", breweryDetails)
			return {...state, loading: true, breweryDetails: breweryDetails}
		default:
			return state
	}
}


const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            }
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
	requestItems,
	receiveItems,
	auth
})

export default rootReducer