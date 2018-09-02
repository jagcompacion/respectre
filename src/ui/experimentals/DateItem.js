import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  today: PropTypes.bool,
  active: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  tag: 'button',
  today: false,
  active: false,
};

const DateItem = (props) => {
  const {
    className,
    children,
    tag: Tag,
    today,
    active,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'date-item',
    today && 'date-today',
    active && 'active',
  );

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

DateItem.propTypes = propTypes;
DateItem.defaultProps = defaultProps;

export default DateItem;
