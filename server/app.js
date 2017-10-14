const express = require('express');
const path = require('path');
// destructuring the ramda object then assigning it to newly variable.
let { pipe: _pipe } = require('ramda');

// creating our app instance.
const app = express();

// get the path of build folder then pass it to the static method to state that this folder can be accessed on the browser
// then use it as middleware.
_pipe(
    path.join,
    express.static,
    app.use.bind(app)
)(__dirname, '../build');

// when navigating to all urls of this domain, served the index.html
// dirname - the directory named of the current module.
app.get('/*', (req, res) => 
    // get the path of the index.html
    // then pass that path to the sendFile method to specify what will be the file to be response.
    _pipe(
        path.join,
        res.sendFile.bind(res) // hard-bind the sendFile method to its object to prevent the changes of the context
    )(__dirname, '../build/index.html')
);


// export this app object.
module.exports = app;
