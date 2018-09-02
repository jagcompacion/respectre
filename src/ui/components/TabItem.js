import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  action: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  active: false,
  action: false,
};

const TabItem = (props) => {
  const {
    className,
    children,
    active,
    action,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tab-item',
    active && 'active',
    action && 'tab-action',
  );

  return (
    <li {...attributes} className={classes}>
      {children}
    </li>
  );
};

TabItem.propTypes = propTypes;
TabItem.defaultProps = defaultProps;

export default TabItem;
