import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { routes, store, history } from './config/routes';
import { Firebase, database } from './firebase/firebase';
import { login, logout } from './actions/index';

ReactDOM.render(<p>Loading the pretensh...</p>, document.getElementById('root'));

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(routes, document.getElementById('root'));
        hasRendered = true;        
    }
};
// fire everytime auth state changes and on initial app load
Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // gets uid into redux store
        store.dispatch(login(user.uid));
        renderApp();
        database.ref(`/${user.uid}`).once('value', (snapshot) => {
            database.ref(`/${user.uid}`).set({
                uid: user.uid,
                name: user.displayName,
                photo: user.photoURL
            });
        });
        // if they open app but still logged in
        if (history.location.pathname === '/') {
            history.push('/reclist');
        }
        console.log('uid', user.uid);
    } else {
        renderApp();
        store.dispatch(logout(user.uid)); // wipes uid from redux store
        history.push('/');
        // if (window.location.pathname !== '/') {
        //     window.location.href = "/"; 
    }
});

registerServiceWorker();
