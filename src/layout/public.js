//import libs
import React from 'react'
import PropTypes from 'prop-types'
import Header from '@modules/app/components/header'
import Footer from '@modules/app/components/footer'

// import components

const containerStyle = {
  paddingTop: '3.5rem',
}

const displayName = 'Public Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PublicLayout({ children }) {
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

PublicLayout.dispatch = displayName
PublicLayout.propTypes = propTypes

export default PublicLayout
