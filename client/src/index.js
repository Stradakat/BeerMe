import ReactDOM from 'react-dom';
import routes from './config/routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import { LocaleProvider } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';


ReactDOM.render(routes, document.getElementById('root'));

registerServiceWorker();
