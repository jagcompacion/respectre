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

const PopoverContainer = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'popover-container',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

PopoverContainer.propTypes = propTypes;
PopoverContainer.defaultProps = defaultProps;

export default PopoverContainer;
