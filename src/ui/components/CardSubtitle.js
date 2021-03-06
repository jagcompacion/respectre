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

const CardSubtitle = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'card-subtitle',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

CardSubtitle.propTypes = propTypes;
CardSubtitle.defaultProps = defaultProps;

export default CardSubtitle;
