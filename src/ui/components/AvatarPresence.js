import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  presence: PropTypes.string,
};

const defaultProps = {
  className: '',
  presence: 'offline',
};

const AvatarPresence = (props) => {
  const {
    className,
    presence,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'avatar-presence',
    presence,
  );

  return (
    <i {...attributes} className={classes} />
  );
};

AvatarPresence.propTypes = propTypes;
AvatarPresence.defaultProps = defaultProps;

export default AvatarPresence;
