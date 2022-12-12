//import libs
import React from 'react'
import PropTypes from 'prop-types'
import Header from '@modules/app/components/header'
import Footer from '@modules/app/components/footer'
import AuthImage from '../assets/img/login-background.png'

// import components

const containerStyle = {
  paddingTop: '3.5rem',
  backgroundImage: `url("${AuthImage}")`,
}

const displayName = 'Public Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PublicLayout({ children }) {
  return (
    <>
      <div style={containerStyle}>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

PublicLayout.dispatch = displayName
PublicLayout.propTypes = propTypes

export default PublicLayout
