import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  rounded: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  color: '',
  rounded: false,
};

const Label = (props) => {
  const {
    className,
    children,
    color,
    rounded,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'label',
    color && `label-${color}`,
    rounded && 'label-rounded',
  );

  return (
    <span {...attributes} className={classes}>
      {children}
    </span>
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
