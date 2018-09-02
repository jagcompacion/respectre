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

const OffCanvasContent = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'off-canvas-content',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

OffCanvasContent.propTypes = propTypes;
OffCanvasContent.defaultProps = defaultProps;

export default OffCanvasContent;
