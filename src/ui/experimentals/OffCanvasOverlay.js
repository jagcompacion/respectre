import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.func,
};

const defaultProps = {
  children: null,
  className: '',
  toggle: e => e,
};

const OffCanvasOverlay = (props) => {
  const {
    className,
    children,
    toggle,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'off-canvas-overlay',
  );

  return (
    <a {...attributes} toggle={toggle} className={classes}>
      {children}
    </a>
  );
};

OffCanvasOverlay.propTypes = propTypes;
OffCanvasOverlay.defaultProps = defaultProps;

export default OffCanvasOverlay;
