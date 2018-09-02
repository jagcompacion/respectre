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

const ModalOverlay = (props) => {
  const {
    className,
    children,
    toggle,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'modal-overlay',
  );

  return (
    <a href="/" onClick={(e) => { e.preventDefault(); toggle(); }} aria-label="Close" {...attributes} className={classes}>
      {' '}
    </a>
  );
};

ModalOverlay.propTypes = propTypes;
ModalOverlay.defaultProps = defaultProps;

export default ModalOverlay;
