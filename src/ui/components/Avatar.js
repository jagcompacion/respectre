import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  badge: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  size: '',
  badge: false,
};

const Avatar = (props) => {
  const {
    className,
    children,
    size,
    badge,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'avatar',
    size && `avatar-${size}`,
    badge && 'badge',
  );

  return (
    <figure {...attributes} className={classes}>
      {children}
    </figure>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
