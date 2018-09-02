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

const CalendarNav = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'calendar-nav navbar',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

CalendarNav.propTypes = propTypes;
CalendarNav.defaultProps = defaultProps;

export default CalendarNav;
