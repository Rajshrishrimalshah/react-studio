import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Dashboard } from '../modules';

const styles = {
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
};

const Routes = (props) => {
  const { classes } = props;
  return (
    <Switch>
      <div className={classes.root}>
        <Route path="/" component={Dashboard} />
      </div>
    </Switch>
  );
};

export default withStyles(styles)(Routes);

Routes.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};
