import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  position: '',
};

const Popover = (props) => {
  const {
    className,
    children,
    position,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'popover',
    position && `popover-${position}`,
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
