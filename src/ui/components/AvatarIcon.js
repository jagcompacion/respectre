import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

const defaultProps = {
  className: '',
  alt: '',
};

const AvatarIcon = (props) => {
  const {
    className,
    alt,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'avatar-icon',
  );

  return (
    <img {...attributes} className={classes} alt={alt} />
  );
};

AvatarIcon.propTypes = propTypes;
AvatarIcon.defaultProps = defaultProps;

export default AvatarIcon;
