import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  centered: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  centered: false,
};

const Tile = (props) => {
  const {
    className,
    children,
    centered,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tile',
    centered && 'tile-centered',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;
