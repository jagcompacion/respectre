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

const FilterNav = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'filter-nav',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

FilterNav.propTypes = propTypes;
FilterNav.defaultProps = defaultProps;

export default FilterNav;
