import React from 'react'

var NotFound = React.createClass({
  render: function () {
    return (
        <div className='home'>
          <div className='striped-bg in-it' style={{minHeight: 500}}>
            <div className='row'>
              <br /><br />
              <h2>
                Sorry, we're not ready for this page yet
              </h2>
            </div>
          </div>
        </div>
    )
  }
})

export default NotFound