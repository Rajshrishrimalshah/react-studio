/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddOutlined from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import PropTypes from 'prop-types';

const styles = {
  root: {
    display: 'flex',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  count: {
    marginTop: 15,
  },
};

class QuantityManger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleRemoveClick = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  handleAddClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { classes } = this.props;
    const { count } = this.state;
    return (
      <div className={classes.root}>
        {
          count > 0 ? (
            <IconButton aria-label="remove" className={classes.icon} onClick={this.handleRemoveClick}>
              <RemoveCircleOutline />
            </IconButton>
          ) : null
        }
        <div className={classes.count}>
          {count}
        </div>
        <IconButton aria-label="add" className={classes.icon} onClick={this.handleAddClick}>
          <AddOutlined />
        </IconButton>
      </div>
    );
  }
}

QuantityManger.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuantityManger);
