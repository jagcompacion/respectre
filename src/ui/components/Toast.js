import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  color: '',
};

const Tab = (props) => {
  const {
    className,
    children,
    color,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'toast',
    color && `toast-${color}`,
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
