import React from 'react'
import NavList from '../navigation/nav-list.jsx'

var Nav = React.createClass({
  render: function () {
    return (
        <nav id='main-nav' className='show-for-medium-up'>
          <ul>
            <NavList />
          </ul>
        </nav>
    )
  }
})

export default Nav