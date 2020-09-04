import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

const Provider = ({ children }) => (
  <Router>
    {children}
  </Router>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
