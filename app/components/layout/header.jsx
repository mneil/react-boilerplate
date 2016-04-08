import React from 'react'
import Nav from './Nav.jsx'
import NavLink from '../navigation/nav-link.jsx'
import '../../sass/header.sass'

var Header = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
        <div id='wrapper'>
          <div className='row'>
            <div className='small-12 column'>
              <header>
                <div className='row'>
                  <div className='small-9 medium-7 column'>
                    <h1 id='logo'>
                      <NavLink to='/'>
                        <img src='/img/logo.png' alt='Boilerplate' title='Boilerplate' />
                      </NavLink>
                    </h1>
                  </div>
                  <div className='small-3 medium-5 column'>
                    <Nav />
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
    )
  }
})

export default Header