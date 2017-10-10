import React from 'react';
import ReactDOM from 'react-dom';

/* importing styles in our app*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

import App from './scenes/App';
import registerServiceWorker from 'utils/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
