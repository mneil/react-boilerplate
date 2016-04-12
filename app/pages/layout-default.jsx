import React from 'react'
var router = require('react-router')

import Header from '../components/layout/header.jsx'
import Footer from '../components/layout/footer.jsx'

import '../sass/base.sass'

var LayoutDefault = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },
  componentDidMount: function () {
    window.scrollTo(0, 0)
  },
  render: function () {
    return (
      <div>
        <section>
          <Header/>
          <Footer />
        </section>
      </div>
    )
  }
})

export default LayoutDefault