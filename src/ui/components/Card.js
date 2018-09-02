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

const Card = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'card',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
