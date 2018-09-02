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

const Loading = (props) => {
  const {
    className,
    children,
    size,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'loading',
    size && `loading-${size}`,
  );

  return (
    <div {...attributes} className={classes} />
  );
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
