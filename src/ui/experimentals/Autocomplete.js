import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  oneline: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  oneline: false,
};

const Autocomplete = (props) => {
  const {
    className,
    children,
    oneline,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'form-autocomplete',
    oneline && 'autocomplete-oneline',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

Autocomplete.propTypes = propTypes;
Autocomplete.defaultProps = defaultProps;

export default Autocomplete;
