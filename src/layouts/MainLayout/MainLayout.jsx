import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Header } from '../../components';

const styles = () => ({
  root: {
    minHeight: '100vh',
    minwidth: '100%',
    margin: 0,
    padding: 0,
  },
  header: {
    minHeight: '10vh',
    minwidth: '100%',
    backgroundColor: '#E9ECEC',
    textAlign: 'center',
  },
  body: {
    minHeight: '95vh',
    minwidth: '100%',
    backgroundColor: '#E2F6F6',
  },
});

const MainLayout = ({ children, classes }) => (
  <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12} className={classes.header}>
      <Header />
    </Grid>
    <Grid item xs={12} className={classes.body}>
      {children}
    </Grid>
  </Grid>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.node.isRequired,
};

export default withStyles(styles)(MainLayout);
