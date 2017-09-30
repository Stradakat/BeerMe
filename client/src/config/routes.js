import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'; // use BrowserRouter to create, Route sets up individual pages
import HomePage from './../components/HomePage';
import RecList from './../components/recList/reclist';
import Survey from './../components/Survey/survey';
import Brewery from './../components/Brewery/Brewery';
import createHistory from 'history/createBrowserHistory';

//Redux stuff
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './../reducers'
import promise from 'redux-promise-middleware';

export const middleware = [ thunk ]

export const store = createStore(
	rootReducer,
	applyMiddleware(...middleware, promise())
)

// use our own history instead of BrowserRouter history
export const history = createHistory();

// break out into own component eventually, or redirect to valid page
export const NotFoundPage = () => (
    <div>
        404!
    </div>
);

// <Switch> will stop when it hits a valid url, otherwise will show the NotFoundPage
export const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/reclist" component={RecList} />
                <Route path="/survey" component={Survey} />
                <Route path="/brewery" component={Brewery} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </Provider>
);