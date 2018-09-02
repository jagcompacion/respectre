import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

const defaultProps = {
  inline: false,
  children: null,
  size: '',
  type: '',
  className: '',
};

const FormLabel = (props) => {
  const {
    inline,
    className,
    children,
    size,
    type,
    ...attributes
  } = props;

  let labelClass = 'form-label';
  const checkInput = ['radio', 'checkbox', 'switch'].indexOf(type) > -1;
  if (checkInput) {
    labelClass = `form-${type}`;
  }

  const classes = classNames(
    className,
    labelClass,
    inline && 'form-inline',
    size && `label-${size}`,
  );

  return (
    <label {...attributes} className={classes}>
      {children}
    </label>
  );
};

FormLabel.propTypes = propTypes;
FormLabel.defaultProps = defaultProps;

export default FormLabel;
