//import libs
import React from 'react'
import PropTypes from 'prop-types'
import Header from '@modules/app/components/header'
import Footer from '@modules/app/components/footer'

// import components

const containerStyle = {
  paddingTop: '3.5rem',
}

const displayName = 'Private Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PrivateLayout({ children }) {
  return (
    <>
      <Header />
      <div style={containerStyle}>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

PrivateLayout.dispatch = displayName
PrivateLayout.propTypes = propTypes

export default PrivateLayout
