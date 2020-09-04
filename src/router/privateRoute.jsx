import React from 'react';
import PropTypes from 'prop-types';

const PrivateRouteHOC = ({ component: Component, layout: Layout, ...rest }) => (
  <Layout {...rest}>
    <Component {...rest} />
  </Layout>
);

PrivateRouteHOC.propTypes = {
  component: PropTypes.any.isRequired, // eslint-disable-line
  layout: PropTypes.any.isRequired, // eslint-disable-line
};

const PrivateRoute = PrivateRouteHOC;

export {
  PrivateRoute, // eslint-disable-line`
};
