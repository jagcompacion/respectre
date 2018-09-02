import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  type: 'checkbox',
};

const AccordionHeader = (props) => {
  const {
    className,
    children,
    id,
    type,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'accordion-header',
  );

  return (
    <React.Fragment>
      <input type={type} id={id} name={`accordion-${type}`} hidden />
      <label {...attributes} className={classes} htmlFor={id}>
        {children}
      </label>
    </React.Fragment>
  );
};

AccordionHeader.propTypes = propTypes;
AccordionHeader.defaultProps = defaultProps;

export default AccordionHeader;
