import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gapless: PropTypes.bool,
  oneline: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  gapless: false,
  oneline: false,
};

const Cols = (props) => {
  const {
    className,
    children,
    gapless,
    oneline,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'columns',
    gapless && 'col-gapless',
    oneline && 'col-oneline',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Cols.propTypes = propTypes;
Cols.defaultProps = defaultProps;

export default Cols;
