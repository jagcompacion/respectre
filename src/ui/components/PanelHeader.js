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

const PanelHeader = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'panel-header',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

PanelHeader.propTypes = propTypes;
PanelHeader.defaultProps = defaultProps;

export default PanelHeader;
