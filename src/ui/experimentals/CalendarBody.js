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

const CalendarBody = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'calendar-body',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

CalendarBody.propTypes = propTypes;
CalendarBody.defaultProps = defaultProps;

export default CalendarBody;
