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

const Figure = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'figure',
  );

  return (
    <figure {...attributes} className={classes}>
      {children}
    </figure>
  );
};

Figure.propTypes = propTypes;
Figure.defaultProps = defaultProps;

export default Figure;
