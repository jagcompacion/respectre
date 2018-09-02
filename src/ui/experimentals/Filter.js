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

const Filter = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'filter',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
