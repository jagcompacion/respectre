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

const PanelSubtitle = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'panel-subtitle',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

PanelSubtitle.propTypes = propTypes;
PanelSubtitle.defaultProps = defaultProps;

export default PanelSubtitle;
