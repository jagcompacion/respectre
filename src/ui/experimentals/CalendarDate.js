import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  month: PropTypes.string,
  process: PropTypes.string,
  range: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  month: '',
  process: '',
  range: false,
};

const CalendarDate = (props) => {
  const {
    className,
    children,
    month,
    process,
    range,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'calendar-date text-center',
    month && `${month}-month`,
    range && 'calendar-range',
    process && `range-${process}`,
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

CalendarDate.propTypes = propTypes;
CalendarDate.defaultProps = defaultProps;

export default CalendarDate;
