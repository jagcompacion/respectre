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

const PageItemTitle = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'page-item',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

PageItemTitle.propTypes = propTypes;
PageItemTitle.defaultProps = defaultProps;

export default PageItemTitle;
