var React = require('react')
import { Route, IndexRoute } from 'react-router'

import LayoutDefault from './pages/layout-default.jsx'
import Home from './pages/home.jsx'
import Reporting from './pages/reporting.jsx'
import NotFound from './pages/notFound.jsx'

var routes = (
  <Route path='/' component={LayoutDefault}>
    <IndexRoute component={Home} />
    <Route path='/reporting' component={Reporting} />
    <Route path='*' component={NotFound} />
  </Route>
)

module.exports = routes
