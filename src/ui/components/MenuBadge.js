import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
};

const MenuBadge = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'menu-badge',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

MenuBadge.propTypes = propTypes;
MenuBadge.defaultProps = defaultProps;

export default MenuBadge;
