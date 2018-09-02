import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  size: '',
};

const InputGroupAddon = (props) => {
  const {
    className,
    children,
    size,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'input-group-addon',
    size && `addon-${size}`,
  );

  return (
    <span {...attributes} className={classes}>
      {children}
    </span>
  );
};

InputGroupAddon.propTypes = propTypes;
InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
