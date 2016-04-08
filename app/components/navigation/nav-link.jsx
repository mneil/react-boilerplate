import React from 'react'
import { Link, browserHistory } from 'react-router'

var NavLink = React.createClass({
  propTypes: {
    to: React.PropTypes.string,
    class: React.PropTypes.string,
    linkText: React.PropTypes.string,
    callbackLinkClick: React.PropTypes.func
  },
  handleClick: function (link, e) {
    e.preventDefault()
    if (this.props.callbackLinkClick) { this.props.callbackLinkClick() }
    browserHistory.push(link)
  },
  render: function () {
    return (
        <Link to={this.props.to} onClick={this.handleClick.bind(this, this.props.to)} className={this.props.class}>
          {this.props.linkText}
        </Link>
    )
  }
})

export default NavLink