import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../elements';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.func,
  color: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  toggle: e => e,
  color: '',
};

const OffCanvasButton = (props) => {
  const {
    className,
    children,
    toggle,
    color,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'off-canvas-toggle',
  );

  return (
    <Button
      {...attributes}
      color={`btn-${color}`}
      action
      className={classes}
      onClick={toggle}
    >
      {children}
    </Button>
  );
};

OffCanvasButton.propTypes = propTypes;
OffCanvasButton.defaultProps = defaultProps;

export default OffCanvasButton;
