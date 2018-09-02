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

const CalendarHeader = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'calendar-header',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

CalendarHeader.propTypes = propTypes;
CalendarHeader.defaultProps = defaultProps;

export default CalendarHeader;
