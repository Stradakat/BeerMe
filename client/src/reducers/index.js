import { combineReducers } from 'redux'
import {REQUEST_BEERS, RECEIVE_BEERS, REQUEST_BREWERY, RECEIVE_BREWERY} from '../actions'

const initialState = {
	"beers": [],
	"breweries": [],
	"loading": false,
	"error": null
}

const requestItems = (state = initialState, action) => {
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

	switch (action.type) {
	  case RECEIVE_BEERS:
			beers = action.payload.data.results;
			return {...state, loading: true, beers}
	  case RECEIVE_BREWERY:
			breweries = action.payload.data.results;	
			return {...state, loading: true, breweries}
		default:
			return state
	}
}
const rootReducer = combineReducers({
	requestItems,
	receiveItems
})

export default rootReducer