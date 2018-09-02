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

const ModalTitle = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'modal-title',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

ModalTitle.propTypes = propTypes;
ModalTitle.defaultProps = defaultProps;

export default ModalTitle;
