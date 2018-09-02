import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
};

const TileIcon = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tile-icon',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

TileIcon.propTypes = propTypes;
TileIcon.defaultProps = defaultProps;

export default TileIcon;
