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

const PanelNav = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'panel-nav',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

PanelNav.propTypes = propTypes;
PanelNav.defaultProps = defaultProps;

export default PanelNav;
