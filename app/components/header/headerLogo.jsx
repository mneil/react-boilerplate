import React from 'react'
import { Link } from 'react-router'

var HeaderLogo = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <span id='logo'>
        <Link to='/'>
          <img src='/images/logo.png' alt='Reach Status' title='Reach Status' />
        </Link>
      </span>
    )
  }
})

export default HeaderLogo
