import React from 'react'

var FooterCopyright = React.createClass({
  render: function () {
    var year = new Date().getFullYear()
    return <small id='copyright'>&copy; <strong>{year}</strong> Unicorns</small>
  }
})

export default FooterCopyright
