import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  alt: PropTypes.string,
};

const defaultProps = {
  className: '',
  type: '',
  alt: '',
};

const Img = (props) => {
  const {
    className,
    type,
    alt,
    ...attributes
  } = props;

  let imgClass = 'img-responsive';
  if (type === 'contain') imgClass = 'img-fit-contain';
  if (type === 'cover') imgClass = 'img-fit-cover';

  const classes = classNames(
    className,
    imgClass,
  );

  return (
    <img {...attributes} className={classes} alt={alt} />
  );
};

Img.propTypes = propTypes;
Img.defaultProps = defaultProps;

export default Img;
