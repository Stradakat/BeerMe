import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; // use BrowserRouter to create, Route sets up individual pages
import HomePage from './../components/HomePage';
import RecList from './../components/recList/reclist';

//Redux stuff
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './../reducers'
import promise from 'redux-promise-middleware';

const middleware = [ thunk ]

const store = createStore(
	rootReducer,
	applyMiddleware(...middleware, promise())
)

// break out into own component eventually, or redirect to valid page
const NotFoundPage = () => (
    <div>
        404!
    </div>
);

// <Switch> will stop when it hits a valid url, otherwise will show the NotFoundPage
const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/reclist" component={RecList} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default routes;