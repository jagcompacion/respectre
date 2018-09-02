import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  tag: 'span',
};

const Chip = (props) => {
  const {
    className,
    children,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'chip',
  );

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;

export default Chip;
