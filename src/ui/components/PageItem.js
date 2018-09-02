import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  type: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  disabled: false,
  active: false,
  type: '',
};

const PageItem = (props) => {
  const {
    className,
    children,
    disabled,
    active,
    type,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'page-item',
    disabled && 'disabled',
    active && 'active',
    type && `page-${type}`,
  );

  return (
    <li {...attributes} className={classes}>
      {children}
    </li>
  );
};

PageItem.propTypes = propTypes;
PageItem.defaultProps = defaultProps;

export default PageItem;
