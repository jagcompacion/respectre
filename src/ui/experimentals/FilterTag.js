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

const FilterTag = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'filter-tag',
  );

  return (
    <input {...attributes} className={classes} name="filter-radio" type="radio" hidden />
  );
};

FilterTag.propTypes = propTypes;
FilterTag.defaultProps = defaultProps;

export default FilterTag;
