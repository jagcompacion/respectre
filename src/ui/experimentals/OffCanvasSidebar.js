import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  active: false,
};

const OffCanvasSidebar = (props) => {
  const {
    className,
    children,
    active,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'off-canvas-sidebar',
    active && 'active',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

OffCanvasSidebar.propTypes = propTypes;
OffCanvasSidebar.defaultProps = defaultProps;

export default OffCanvasSidebar;
