import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/Container'

import GlobalStyle from './GlobalStyle'

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
