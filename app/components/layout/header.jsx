import React from 'react'
import Nav from './Nav.jsx'
import NavLink from '../navigation/nav-link.jsx'
import '../../sass/header.sass'

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <h1 id='logo'>
          <NavLink to='/'>
            <img src='img/logo.png' alt='Boilerplate' title='Boilerplate' />
          </NavLink>
        </h1>
        <div className='small-3 medium-5 column'>
          <Nav />
        </div>
      </header>
    )
  }
})

export default Header