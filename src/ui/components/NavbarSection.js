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

const NavbarSection = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'navbar-section',
  );

  return (
    <section {...attributes} className={classes}>
      {children}
    </section>
  );
};

NavbarSection.propTypes = propTypes;
NavbarSection.defaultProps = defaultProps;

export default NavbarSection;
