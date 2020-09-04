/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { withStyles } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PropTypes from 'prop-types';
import QuantityManager from '../QuantityManager';
import image from './default.png';

const tileData = [
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
];

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: 15,
  },
  gridList: {
    width: 'auto',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
};

const CoustomGridList = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={4} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={(
                <span>
                  by:
                  {' '}
                  {tile.author}
                </span>
              )}
              actionIcon={(
                <QuantityManager />
              )}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

CoustomGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CoustomGridList);
