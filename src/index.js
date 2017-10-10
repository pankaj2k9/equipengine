import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/App';
import registerServiceWorker from 'utils/serviceWorker';

/* importing styles in our app*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
