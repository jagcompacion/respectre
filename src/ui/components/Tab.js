import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  block: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  block: false,
};

const Tab = (props) => {
  const {
    className,
    children,
    block,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tab',
    block && 'tab-block',
  );

  return (
    <ul {...attributes} className={classes}>
      {children}
    </ul>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
