import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  tooltip: PropTypes.bool,
  background: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  value: 0,
  min: 0,
  max: 100,
  tooltip: false,
  background: '',
};

const BarItem = (props) => {
  const {
    className,
    children,
    value,
    min,
    max,
    tooltip,
    background,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'bar-item',
    tooltip && 'tooltip',
  );

  const style = {
    width: `${(value / (max - min)) * 100}%`,
  };

  if (background) style.background = background;

  return (
    <div
      {...attributes}
      className={classes}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      style={style}
    >
      {children}
    </div>
  );
};

BarItem.propTypes = propTypes;
BarItem.defaultProps = defaultProps;

export default BarItem;
