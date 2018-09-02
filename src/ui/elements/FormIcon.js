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

const FormIcon = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'form-icon',
  );

  return (
    <i {...attributes} className={classes} />
  );
};

FormIcon.propTypes = propTypes;
FormIcon.defaultProps = defaultProps;

export default FormIcon;
