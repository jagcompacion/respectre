import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const colWidths = ['size', 'xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumberProp = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
]);

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  column: PropTypes.bool,
  offset: stringOrNumberProp,
  size: stringOrNumberProp,
  xs: stringOrNumberProp,
  sm: stringOrNumberProp,
  md: stringOrNumberProp,
  lg: stringOrNumberProp,
  xl: stringOrNumberProp,
};

const defaultProps = {
  children: null,
  className: '',
  offset: false,
  column: false,
  size: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

const getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return isXs ? 'col-12' : `col-${colWidth}`;
  }
  if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

const Col = (props) => {
  const {
    className,
    children,
    column,
    offset,
    ...attributes
  } = props;
  const colClasses = [];

  colWidths.forEach((colWidth, i) => {
    /* eslint-disable-next-line */
    const columnProp = props[colWidth];
    delete attributes[colWidth];
    if (!columnProp && columnProp !== '') {
      return false;
    }
    const isXs = !i;
    const colClass = getColumnSizeClass(isXs, colWidth, columnProp);
    colClasses.push(colClass);
    return false;
  });

  let offsetClasses = '';
  if (offset) {
    offsetClasses = offset === 'left' ? 'col-ml-auto' : offsetClasses;
    offsetClasses = offset === 'right' ? 'col-mr-auto' : offsetClasses;
    offsetClasses = offset === 'center' ? 'col-mx-auto' : offsetClasses;
  }
  const classes = classNames(
    className,
    column && 'column',
    offsetClasses,
    colClasses,
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
