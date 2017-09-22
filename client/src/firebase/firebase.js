import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDqP92J5b3bulecrezKrJGRVXK4xB1hpw8",
  authDomain: "beer-me-e2db2.firebaseapp.com",
  databaseURL: "https://beer-me-e2db2.firebaseio.com",
  projectId: "beer-me-e2db2",
  storageBucket: "",
  messagingSenderId: "24676371617"
};

firebase.initializeApp(config);
const database = firebase.database();

// create instance of provider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


