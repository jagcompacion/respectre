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

const ModalContainer = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'modal-container',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

ModalContainer.propTypes = propTypes;
ModalContainer.defaultProps = defaultProps;

export default ModalContainer;
