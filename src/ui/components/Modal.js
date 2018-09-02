import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool,
  size: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  show: false,
  size: '',
};

const Modal = (props) => {
  const {
    className,
    children,
    show,
    size,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'modal',
    show && 'active',
    size && `modal-${size}`,
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
