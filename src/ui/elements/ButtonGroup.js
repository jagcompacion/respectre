import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  block: false,
};

const ButtonGroup = (props) => {
  const {
    block,
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'btn-group',
    block && 'btn-group-block',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
