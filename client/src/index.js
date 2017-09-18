import ReactDOM from 'react-dom';
//Redux stuff
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import promise from 'redux-promise-middleware';
import routes from './config/routes';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import { LocaleProvider } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';


const middleware = [ thunk ]

const store = createStore(
	rootReducer,
	applyMiddleware(...middleware, promise())
)

ReactDOM.render(routes, document.getElementById('root'));

registerServiceWorker();
