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

const CardImage = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'card-image',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

CardImage.propTypes = propTypes;
CardImage.defaultProps = defaultProps;

export default CardImage;
