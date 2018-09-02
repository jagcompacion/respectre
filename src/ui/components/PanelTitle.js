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

const PanelTitle = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'panel-title',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

PanelTitle.propTypes = propTypes;
PanelTitle.defaultProps = defaultProps;

export default PanelTitle;
