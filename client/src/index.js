import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { routes, store, history, middleware } from './config/routes';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';


ReactDOM.render(routes, document.getElementById('root'));

// fire everytime auth state changes, including first load of app
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        // route user to the reclist page if they're on homepage and authenticated
        ReactDOM.render(routes, document.getElementById('root'));
        if (history.location.pathname === '/') {
            history.push('/reclist')
        }
    } else {
        // console.log('log out');
        store.dispatch(logout(user.uid));
        ReactDOM.render(routes, document.getElementById('root'));
        history.push('/');
    }
});

registerServiceWorker();
