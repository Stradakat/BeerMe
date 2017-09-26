import { combineReducers } from 'redux';
import {REQUEST_BEERS, RECEIVE_BEERS, REQUEST_BREWERY, RECEIVE_BREWERY} from '../actions/index';

const initialState = {
	"beers": [],
	"breweries": [],
	"beerListing": [],
	"loading": false,
	"user": {
		"uid": null
	}, 
	"error": null,
	"chosenModal": {},
	"visible": false,
	"toTry": [{
		"type": "Random Beer",
		"recs": [{
				"name": "PBR",
				"like": 4,
				"pic": "https://dydza6t6xitx6.cloudfront.net/ci_1143.jpg",
				"reviewed": false
			},
			{
				"name": "Duff",
				"like": 3,
				"pic": "http://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_112699.jpg",
				"reviewed": false
			},
			{
				"name": "Budweiser",
				"like": 2,
				"pic": "https://dydza6t6xitx6.cloudfront.net/ci_2822.jpg",
				"reviewed": false
			},
			{
				"name": "Bud Light",
				"like": 5,
				"pic": "http://www.totalwine.com/media/sys_master/twmmedia/h78/hf8/9770809884702.png",
				"reviewed": false
			},
			{
				"name": "Coors",
				"like": 4,
				"pic": "https://onlinecashandcarry.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sol_beer_nrb_330ml.jpg",
				"reviewed": false
			}]
	}]
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
	let breweries;
	let toTry;
	let beerListing;
	
	switch (action.type) {
		case RECEIVE_BEERS:
			beerListing = action.payload;
			toTry= [{
				"type": "API Beer",
				"recs": beerListing
			}]
			return {...state, loading: true, beerListing: beerListing, toTry: toTry}
	  case RECEIVE_BREWERY:
			breweries = action.payload.data.results;	
			return {...state, loading: true, breweries}
		default:
			return state
	}
}


const auth = (state = {}, action) => {
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