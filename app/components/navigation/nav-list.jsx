import React from 'react'
import NavLink from './nav-link.jsx'

var NavList = React.createClass({
  propTypes: {
    callbackLinkClick: React.PropTypes.func
  },
  handleLinkClick: function () {
    console.log('clicked on this');
    console.log('updated');
    this.props.callbackLinkClick()
  },
  render: function () {
    var linkList = [
      {url: '/', text: 'Home'},
      {url: '/about', text: 'About - 404'},
      {url: '/about', text: 'About - 404'}
    ]
    return (
        <span>{linkList && Object.keys(linkList).map((link, idx) => {
          return <li key={idx}>
            <NavLink
                callbackLinkClick={this.handleLinkClick}
                to={linkList[idx].url}
                linkText={linkList[idx].text} />
          </li>
        })}</span>
    )
  }
})

export default NavList