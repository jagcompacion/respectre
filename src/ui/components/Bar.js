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

const Bar = (props) => {
  const {
    className,
    children,
    size,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'bar',
    size && `bar-${size}`,
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Bar.propTypes = propTypes;
Bar.defaultProps = defaultProps;

export default Bar;
