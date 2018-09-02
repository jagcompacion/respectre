import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  success: PropTypes.bool,
  error: PropTypes.bool,
};

const defaultProps = {
  className: '',
  type: 'input',
  size: '',
  innerRef: e => e,
  children: null,
  success: false,
  error: false,
};

const Input = (props) => {
  const {
    className,
    type,
    innerRef,
    size,
    children,
    success,
    error,
    ...attributes
  } = props;

  const checkInput = ['radio', 'checkbox', 'switch'].indexOf(type) > -1;
  const textareaInput = type === 'textarea';
  const selectInput = type === 'select';
  const Tag = (selectInput || textareaInput) ? type : 'input';

  let sizeClass = `input-${size}`;
  let formClass = 'form-input';
  if (selectInput) {
    formClass = 'form-select';
    sizeClass = `select-${size}`;
  } else if (checkInput) {
    formClass = `form-${type}`;
  }

  const classes = classNames(
    className,
    formClass,
    size && sizeClass,
    success && 'is-success',
    error && 'is-error',
  );

  return (
    <Tag
      {...attributes}
      type={type}
      ref={innerRef}
      className={classes}
    >
      {children}
    </Tag>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
