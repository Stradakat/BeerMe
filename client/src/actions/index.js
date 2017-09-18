export const REQUEST_BEERS = 'REQUEST_BEERS'
export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const SELECT_BREWERY = 'SELECT_BREWERY'
export const RECEIVE_RECOMMENDATIONS = 'RECEIVE_RECOMMENDATIONS'

export const requestBeers = user => ({
  "type": REQUEST_BEERS,
  user
})

export const receiveBeers = (user) => ({
  "type": RECEIVE_BEERS,
  user
})

export const selectBrewery = (user) => ({
  "type": SELECT_BREWERY,
  user
})

export const receiveRecommendations = (user) => ({
  "type": RECEIVE_RECOMMENDATIONS,
  user
})
