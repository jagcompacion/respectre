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

const Step = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'step',
  );

  return (
    <ul {...attributes} className={classes}>
      {children}
    </ul>
  );
};

Step.propTypes = propTypes;
Step.defaultProps = defaultProps;

export default Step;
