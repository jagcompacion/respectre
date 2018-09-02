import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  centered: PropTypes.bool,
};

const defaultProps = {
  className: '',
  icon: '',
  size: '',
  loading: false,
  centered: false,
};

const Icon = (props) => {
  const {
    className,
    icon,
    size,
    loading,
    centered,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'icon',
    icon,
    size && `icon-${size}`,
    centered && 'centered',
  );

  return (
    <i {...attributes} className={classes} />
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
