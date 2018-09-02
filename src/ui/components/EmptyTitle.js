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

const EmptyTitle = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'empty-title',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

EmptyTitle.propTypes = propTypes;
EmptyTitle.defaultProps = defaultProps;

export default EmptyTitle;
