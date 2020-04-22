import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import Container from 'components/Container';

import globalStyles from './globalStyles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Global styles={globalStyles} />
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
