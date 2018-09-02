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

const Container = (props) => {
  const {
    className,
    children,
    size,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'container',
    size && `grid-${size}`,
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
