import React from 'react'
import SimpleLink from './simpleLink.jsx'

var NavigationListItems = React.createClass({
  propTypes: {
    callbackLinkClick: React.PropTypes.func
  },
  handleLinkClick: function () {
    if (this.props.callbackLinkClick) { this.props.callbackLinkClick() }
  },
  render: function () {
    var linkList = [
      {url: '/reporting', text: 'Reporting'}
    ]
    return (
      <ul className='menu'>
        {linkList && Object.keys(linkList).map((link, idx) => {
        return <li role='menuitem' key={idx}>
          <SimpleLink
            callbackLinkClick={this.handleLinkClick}
            to={linkList[idx].url}
            linkText={linkList[idx].text} />
        </li>
      })}</ul>
    )
  }
})

export default NavigationListItems