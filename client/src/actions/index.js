import axios from 'axios';
import { Firebase, googleAuthProvider } from '../firebase/firebase';
// import createHistory from 'history/createBrowserHistory';
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
>>>>>>> 2a7e19d4af9c03f17399ef3fe6879a00410f8f5f
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

// const history = createHistory();

// start login popup
export const startLogin = () => {
  return () => {
      return Firebase.auth().signInWithPopup(googleAuthProvider)
      .then((result) => {
      // history.push('/reclist');
        // const token = result.credential.accessToken
        // console.log(token);
        window.location.href = '/reclist';
      }).catch((e) => {
        console.log('Unable to log in!', e);
      });
  };
};

export const startLogout = () => {
  return () => {
      return Firebase.auth().signOut()
      .then((result) => {
        window.location.href = '/';
      });
  };
};

export const login = (uid) => {
  // logic
  return {
      type: 'LOGIN',
      uid: uid
  }
}

export const logout = () => {
  return {
      type: 'LOGOUT'
  }
}
