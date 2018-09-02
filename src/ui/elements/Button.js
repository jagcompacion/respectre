import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  inputGroup: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  badge: PropTypes.bool,
  tag: PropTypes.string,
  action: PropTypes.bool,
};

const defaultProps = {
  active: false,
  block: false,
  disabled: false,
  loading: false,
  inputGroup: false,
  badge: false,
  color: '',
  size: '',
  className: '',
  innerRef: e => e,
  onClick: e => e,
  tag: 'button',
  children: null,
  action: false,
};

const Button = (props) => {
  const {
    active,
    block,
    disabled,
    loading,
    inputGroup,
    badge,
    color,
    size,
    className,
    innerRef,
    children,
    onClick,
    tag: Tag,
    action,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'btn',
    color && `btn-${color}`,
    size && `btn-${size}`,
    block && 'btn-block',
    action && 'btn-action',
    inputGroup && 'input-group-btn',
    { active, disabled, loading },
    badge && 'badge',
  );

  return (
    <Tag
      className={classes}
      ref={innerRef}
      onClick={onClick}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
