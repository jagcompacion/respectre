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

const PanelBody = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'panel-body',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

PanelBody.propTypes = propTypes;
PanelBody.defaultProps = defaultProps;

export default PanelBody;
