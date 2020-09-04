import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});


const PaperSheet = ({ classes, title, description }) => (
  <div>
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      <Typography component="p">
        {description}
      </Typography>
    </Paper>
  </div>
);

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withStyles(styles)(PaperSheet);
