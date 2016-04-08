var React = require('react')
import { Route, IndexRoute } from 'react-router'

import LayoutDefault from './pages/layout-default.jsx'
import Home from './pages/home.jsx'
import NotFound from './pages/not-found.jsx'

var routes = (
    <Route path='/' component={LayoutDefault}>
      <IndexRoute component={Home} />
      <Route path='*' component={NotFound} />
    </Route>
)

module.exports = routes