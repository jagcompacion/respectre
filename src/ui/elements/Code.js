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

const Code = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'code',
  );

  return (
    <pre {...attributes} className={classes} data-lang="HTML">
      {children}
    </pre>
  );
};

Code.propTypes = propTypes;
Code.defaultProps = defaultProps;

export default Code;
