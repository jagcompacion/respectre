import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  vertical: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  tag: 'div',
  vertical: false,
};

const Divider = (props) => {
  const {
    className,
    children,
    tag: Tag,
    vertical,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    vertical ? 'divider-vert' : 'divider',
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
