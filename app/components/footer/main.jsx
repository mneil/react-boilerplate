import React from 'react'
import FooterCopyright from './copyright.jsx'

var Footer = React.createClass({
  render: function () {
    return (
      <footer>
        <div className='row'>
          <div className='large-9 medium-8 small-12 column'>
          </div>
          <div className='large-3 medium-4 column text-right'>
            <FooterCopyright />
          </div>
        </div>
      </footer>
    )
  }
})

export default Footer
