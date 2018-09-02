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

const TileContent = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tile-content',
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

TileContent.propTypes = propTypes;
TileContent.defaultProps = defaultProps;

export default TileContent;
