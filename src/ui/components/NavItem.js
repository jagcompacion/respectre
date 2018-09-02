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

const NavItem = (props) => {
  const {
    className,
    children,
    active,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'nav-item',
    active && 'active',
  );

  return (
    <li {...attributes} className={classes}>
      {children}
    </li>
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
