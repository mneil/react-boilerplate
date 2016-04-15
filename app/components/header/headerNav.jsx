import React from 'react'
import NavigationListItems from '../navigation/navListItems.jsx'
import HeaderLogo from './headerLogo.jsx'

var MainNav = React.createClass({
  render: function () {
    return (
      <nav id='main-nav' className='show-for-medium-up'>
        
        <div className='top-bar'>
          <div className='top-bar-left'>
            <HeaderLogo callbackLeftMenuToggle={this.leftMenuClick} />
          </div>
          <div className='top-bar-left'>
            <NavigationListItems />
          </div>
          <div className='top-bar-right'>
            <ul className='menu'>
              <li><input type='search' placeholder='Search'/></li>
              <li><button type='button' class='button'>Search</button></li>
            </ul>
          </div>
        </div>
        
      </nav>
    )
  }
})

export default MainNav
