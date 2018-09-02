import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  inline: false,
};

const InputGroup = (props) => {
  const {
    className,
    children,
    inline,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'input-group',
    inline && 'input-inline',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;
