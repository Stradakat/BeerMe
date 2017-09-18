import axios from 'axios';
export const REQUEST_BEERS = 'REQUEST_BEERS';
export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const REQUEST_BREWERY = 'REQUEST_BREWERY';
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY';

export const requestBeers = user => ({
  "type": REQUEST_BEERS,
  "payload": axios("http://localhost:3001/API/recommendations")
})

export const receiveBeers = (user) => ({
  "type": RECEIVE_BEERS,
  user
})

export const requestBrewery = (user) => ({
  "type": REQUEST_BREWERY,
  user
})

export const receiveBrewery = (user) => ({
  "type": RECEIVE_BREWERY,
  user
})
