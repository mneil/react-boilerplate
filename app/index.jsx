import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
var routes = require('./routes.jsx')

ReactDOM.render((
        <Router history={browserHistory}>
          {routes}
        </Router>),
    document.getElementById('App')
)