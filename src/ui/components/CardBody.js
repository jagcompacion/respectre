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

const CardBody = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'card-body',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
