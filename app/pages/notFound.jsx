import React from 'react'

var NotFound = React.createClass({
  render: function () {
    return (
        <div className='not-found'>
          <div className='row'>
            <div className='small-12 column'>
              <br /><br />
              Oops! How did you get here? This isn't a page.
            </div>
          </div>
        </div>
    )
  }
})

export default NotFound
