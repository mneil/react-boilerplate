import React from 'react'

import Header from '../components/header/main.jsx'
import Footer from '../components/footer/main.jsx'

var LayoutDefault = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },
  componentDidMount: function () {
    window.scrollTo(0, 0)
  },
  getInitialState: function () {
    return {
    }
  },
  render: function () {
    return (
        <div>

          <section>

            <Header/>

            {React.cloneElement(this.props.children, {
              callbackAuthChanged: this.onAuthChanged,
              callbackShowSignInModal: this.showSignInModal})}
            <Footer />

          </section>

        </div>
    )
  }
})

export default LayoutDefault
