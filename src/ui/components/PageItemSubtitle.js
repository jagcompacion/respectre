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

const PageItemSubtitle = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'page-item-subtitle',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

PageItemSubtitle.propTypes = propTypes;
PageItemSubtitle.defaultProps = defaultProps;

export default PageItemSubtitle;
