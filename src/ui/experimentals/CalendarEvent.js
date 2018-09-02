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

const CalendarEvent = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'calendar-event',
  );

  return (
    <a {...attributes} className={classes}>
      {children}
    </a>
  );
};

CalendarEvent.propTypes = propTypes;
CalendarEvent.defaultProps = defaultProps;

export default CalendarEvent;
