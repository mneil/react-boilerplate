import React from 'react'
import MainNav from './headerNav.jsx'

var Header = React.createClass({
  propTypes: {
    auth: React.PropTypes.bool,
    offCampasDivClass: React.PropTypes.string,
    callbackShowSignInModal: React.PropTypes.func,
    callbackMobileMenuClick: React.PropTypes.func,
    callbackLeftMenuToggle: React.PropTypes.func
  },
  render: function () {
    return (
      <div id='wrapper'>
        <div className='row'>
          <div className='small-12 column'>

            <header>

              <MainNav />

            </header>
          </div>
        </div>
      </div>
    )
  }
})

export default Header
