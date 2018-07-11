import React from "react"
import ReactDOM from "react-dom"

/* importing styles in our app */
// bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-theme.css"
// video react
import "video-react/dist/video-react.css"
// react-select
import "react-select/dist/react-select.css"
// react-toastr notifications https://github.com/diegoddox/react-redux-toastr
import "react-redux-toastr/lib/css/react-redux-toastr.min.css"
// own styles
import "./styles/index.css"

import App from "./app"
import registerServiceWorker from "utils/serviceWorker"

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
