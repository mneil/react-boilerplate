import React from 'react'

var Home = React.createClass({
  propTypes: {
    auth: React.PropTypes.bool,
    callbackShowSignInModal: React.PropTypes.func,
    callbackAuthChanged: React.PropTypes.func
  },
  authChange: function () {
    if (this.props.auth) {
      this.props.callbackAuthChanged(false)
    } else { this.props.callbackShowSignInModal(true) }
  },
  render: function () {
    return (
        <div className='home'>
          <div className='striped-bg in-it' style={{minHeight: 500}}>
            <div className='row'>
              <br /><br />
              <h2>
                <a href='#' onClick={this.authChange}>
                  {this.props.auth ? 'Sign Out' : 'Sign In'}
                </a>
              </h2>
              Authenticated: {this.props.auth.toString()}
            </div>
          </div>
        </div>
    )
  }
})

export default Home