import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { routes, store, history, middleware } from './config/routes';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/index';


ReactDOM.render(routes, document.getElementById('root'));

// fire everytime auth state changes and on initial app load
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.uid)
        store.dispatch(login(user.uid));
        // window.location.href = '/reclist'
        // history.push('/reclist');
        // ReactDOM.render(routes, document.getElementById('root'));
        
    } else {
        store.dispatch(logout(user.uid));
        if (window.location.pathname !== '/') {
            window.location.href = "/";
        }
        ReactDOM.render(routes, document.getElementById('root'));
        // history.push('/');
    }
});

registerServiceWorker();
