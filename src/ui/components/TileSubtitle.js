import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  tag: 'div',
};

const TileSubtitle = (props) => {
  const {
    className,
    children,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tile-subtitle',
  );

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

TileSubtitle.propTypes = propTypes;
TileSubtitle.defaultProps = defaultProps;

export default TileSubtitle;
