import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import styles from './style';

const NotFound = () => (
  <div className="not_found" style={styles.routeNotFoundRoot}>
    <h1 style={styles.routeNotFoundText}>Page Not Found</h1>
  </div>
);

const RouteNotFound = () => <Redirect to={{ state: { notFoundError: true } }} />;

const RouteNotFoundHoc = ({ children, location }) => (location
  && location.state && location.state.notFoundError
  ? <NotFound />
  : children);

RouteNotFoundHoc.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.object.isRequired, // eslint-disable-line
};

const RouteNotFoundWrapper = withRouter(RouteNotFoundHoc);

export {
  RouteNotFoundWrapper,
  RouteNotFound,
};
