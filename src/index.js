import React from 'react'
import ReactDOM from 'react-dom'

/* importing styles in our app */
// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
// video react
import 'video-react/dist/video-react.css'
// react-select
import 'react-select/dist/react-select.css'
// own styles
import './styles/index.css'

import Root from './scenes/Root'
import registerServiceWorker from 'utils/serviceWorker'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
