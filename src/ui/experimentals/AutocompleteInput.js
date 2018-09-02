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

const AutocompleteInput = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'form-autocomplete-input form-input',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

AutocompleteInput.propTypes = propTypes;
AutocompleteInput.defaultProps = defaultProps;

export default AutocompleteInput;
