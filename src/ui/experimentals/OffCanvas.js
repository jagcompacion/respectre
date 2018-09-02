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

const OffCanvas = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'off-canvas',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

OffCanvas.propTypes = propTypes;
OffCanvas.defaultProps = defaultProps;

export default OffCanvas;
