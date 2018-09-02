import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  striped: false,
  hover: false,
  innerRef: e => e,
  children: null,
  className: '',
};

const Table = (props) => {
  const {
    striped,
    hover,
    children,
    className,
    innerRef,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'table',
    striped && 'table-striped',
    hover && 'table-hover',
  );

  return (
    <table
      ref={innerRef}
      className={classes}
      {...attributes}
    >
      {children}
    </table>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
