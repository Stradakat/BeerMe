import React from 'react';
import ReactDOM from 'react-dom';

//Redux stuff
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import promise from 'redux-promise-middleware';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const middleware = [ thunk ]

const store = createStore(
	rootReducer,
	applyMiddleware(...middleware, promise())
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
