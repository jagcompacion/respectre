import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  size: '',
};

const Calendar = (props) => {
  const {
    className,
    children,
    size,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'calendar',
    size && `calendar-${size}`,
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default Calendar;
