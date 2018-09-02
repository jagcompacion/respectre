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

const TileTitle = (props) => {
  const {
    className,
    children,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tile-title',
  );

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

TileTitle.propTypes = propTypes;
TileTitle.defaultProps = defaultProps;

export default TileTitle;
