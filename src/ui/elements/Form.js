import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  horizontal: false,
};

const Form = (props) => {
  const {
    className,
    children,
    horizontal,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    horizontal && 'form-horizontal',
  );

  return (
    <form {...attributes} className={classes}>
      {children}
    </form>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
