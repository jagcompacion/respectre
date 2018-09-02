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

const EmptySubtitle = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'empty-subtitle',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

EmptySubtitle.propTypes = propTypes;
EmptySubtitle.defaultProps = defaultProps;

export default EmptySubtitle;
