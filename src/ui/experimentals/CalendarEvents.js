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

const CalendarEvents = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'calendar-events',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

CalendarEvents.propTypes = propTypes;
CalendarEvents.defaultProps = defaultProps;

export default CalendarEvents;
