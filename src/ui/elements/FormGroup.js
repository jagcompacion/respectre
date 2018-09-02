import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  error: false,
  success: false,
  children: null,
  className: '',
};

const FormGroup = (props) => {
  const {
    error,
    success,
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'form-group',
    error && 'has-error',
    success && 'has-success',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
