import axios from 'axios';
import { Firebase, googleAuthProvider } from '../firebase/firebase';
// import createHistory from 'history/createBrowserHistory';
export const REQUEST_BEERS = 'REQUEST_BEERS';
export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const REQUEST_BREWERY = 'REQUEST_BREWERY';
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY';
export const UPDATE_BEER = 'UPDATE_BEER';
export const SAVED_BEER = 'SAVED_BEER';
export const LOGIN = 'LOGIN';

export const requestBeers = () => {
  return dispatch => {
    axios.get(`https://beertentiousapi.herokuapp.com/API/testJSON`)
      .then(res => {
        const beers = res.data.map(beer => {
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

export const requestBrewery = (breweryID) => {
  return dispatch => {
    axios.get(`https://beertentiousapi.herokuapp.com/API/testBrewery/${breweryID}`)
      .then(res => {
        const brewery = res.data;
        dispatch(receiveBrewery(brewery));
      })
  }
}

export const receiveBrewery = (brewery) => ({
  "type": RECEIVE_BREWERY,
  "payload": brewery
})

export const updateBeer = (type, beer, rate, userID) => {
  return dispatch => {
    axios.post(`https://beertentiousapi.herokuapp.com/API/saveRating?type=${type}&beer=${beer}&rate=${rate}&userID=${userID}`)
      .then(res => {
        dispatch(savedBeer(res));
      })
  }
}

export const savedBeer = (savedEntry) => ({
  "type": SAVED_BEER,
  "payload": savedEntry
})

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
  return {
    "type": LOGIN,
    "payload": uid
  }
}

export const logout = () => {
  return {
      type: 'LOGOUT'
  }
}
