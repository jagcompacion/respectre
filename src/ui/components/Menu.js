import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  nav: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  nav: false,
};

const Menu = (props) => {
  const {
    className,
    children,
    nav,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'menu',
    nav && 'menu-nav',
  );

  return (
    <ul {...attributes} className={classes}>
      {children}
    </ul>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
