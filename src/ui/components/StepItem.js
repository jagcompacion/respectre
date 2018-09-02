import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  active: false,
};

const StepItem = (props) => {
  const {
    className,
    children,
    active,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'step-item',
    active && 'active',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

StepItem.propTypes = propTypes;
StepItem.defaultProps = defaultProps;

export default StepItem;
