/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
var routes = require('./routes.jsx')

ReactDOM.render((
        <Router history={browserHistory}>
          {routes}
        </Router>),
    document.getElementById('App')
)*/


import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello what!</p>;
  }
}


render(<App/>, document.getElementById('app'));