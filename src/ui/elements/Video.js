import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  tag: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  type: '',
  tag: 'div',
};

const Video = (props) => {
  const {
    className,
    children,
    type,
    tag: Tag,
    ...attributes
  } = props;

  let videoClass = '';
  if (type === '4-3') videoClass = 'video-responsive-4-3';
  if (type === '1-1') videoClass = 'video-responsive-1-1';

  const classes = classNames(
    className,
    'video-responsive',
    videoClass,
  );

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
