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

const EmptyAction = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'empty-action',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

EmptyAction.propTypes = propTypes;
EmptyAction.defaultProps = defaultProps;

export default EmptyAction;
