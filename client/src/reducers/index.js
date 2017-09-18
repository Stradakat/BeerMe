import { combineReducers } from 'redux'
import {REQUEST_BEERS, RECEIVE_BEERS, SELECT_BREWERY, RECEIVE_RECOMMENDATIONS} from '../actions'

const selectBrewery = (state = 'reactjs', action) => {
	switch (action.type) {
	  case SELECT_BREWERY:
		return action.user
	  default:
		return state
	}
}

const rootReducer = combineReducers({
	selectBrewery
})

export default rootReducer