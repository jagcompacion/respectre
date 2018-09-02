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

const CalendarContainer = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'calendar-container',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

CalendarContainer.propTypes = propTypes;
CalendarContainer.defaultProps = defaultProps;

export default CalendarContainer;
