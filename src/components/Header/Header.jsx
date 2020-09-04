import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = () => ({
  headerButtons: {
    marginTop: 20,
    marginBottom: 12,
  },
  link: {
    textDecoration: 'none',
  },
});


const Header = ({ classes }) => (
  <>
    <Typography variant="h4" gutterBottom>
      Demo of Apollo Client Local State Management
    </Typography>
    <Grid container xs={12} spacing={8} className={classes.headerButtons}>
      <Grid item xs={4}>
        <Link to="/dashboard" className={classes.link}>
          <Button variant="outlined" color="secondary" className={classes.button}>
            Dashboard
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/dashboard/createProduct" className={classes.link}>
          <Button variant="outlined" color="secondary" className={classes.button}>
            Create Product
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/dashboard/viewCart" className={classes.link}>
          <Button variant="outlined" color="secondary" className={classes.button}>
            View Cart
          </Button>
        </Link>
      </Grid>
    </Grid>
  </>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Header);
