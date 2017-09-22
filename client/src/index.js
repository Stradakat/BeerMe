import ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes';
// import { LocaleProvider } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';

ReactDOM.render(routes, document.getElementById('root'));

registerServiceWorker();
