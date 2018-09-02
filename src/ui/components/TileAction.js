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

const TileAction = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tile-action',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

TileAction.propTypes = propTypes;
TileAction.defaultProps = defaultProps;

export default TileAction;
