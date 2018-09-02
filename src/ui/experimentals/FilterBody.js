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

const FilterBody = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'filter-body',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

FilterBody.propTypes = propTypes;
FilterBody.defaultProps = defaultProps;

export default FilterBody;
