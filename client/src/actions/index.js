import axios from 'axios';
import { firebase, googleAuthProvider } from '../firebase/firebase';
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
