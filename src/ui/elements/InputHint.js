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

const InputHint = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'form-input-hint',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

InputHint.propTypes = propTypes;
InputHint.defaultProps = defaultProps;

export default InputHint;
