import axios from 'axios';
import { firebase, googleAuthProvider } from '../firebase/firebase';
export const REQUEST_BEERS = 'REQUEST_BEERS';
export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const REQUEST_BREWERY = 'REQUEST_BREWERY';
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY';

export const requestBeers = () => {
  return dispatch => {
    axios.get("http://localhost:3001/API/survey3")
      .then(res => {
        console.log(res.data)
        const beers = res.data.map(beer => {
          console.log(beer)          
          return beer
        })
        dispatch(receiveBeers(beers));
      })
  }
}
/*
export const requestBeers = user => ({
  "type": REQUEST_BEERS,
  "payload": axios("http://localhost:3001/API/survey3")
})
*/
export const receiveBeers = (beers) => ({
  "type": RECEIVE_BEERS,
  "payload": beers
})

export const requestBrewery = (user) => ({
  "type": REQUEST_BREWERY,
  user
})

export const receiveBrewery = (user) => ({
  "type": RECEIVE_BREWERY,
  user
})

// start login authentication
export const startLogin = () => {
  return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider)
      .then((result) => {
        // const token = result.credential.accessToken
        // console.log(token);
        window.location.href = '/reclist';
      }).catch((e) => {
        console.log('Unable to log in!', e);
      });
  };
};

// start logout
export const startLogout = () => {
  return () => {
      return firebase.auth().signOut()
      .then((result) => {
        window.location.href = '/';
      });
  };
};

export const login = (uid) => {
  return {
      type: 'LOGIN',
      uid: uid
  }
}

export const logout = (uid) => {
  return {
      type: 'LOGOUT',
      uid: uid
  }
}
