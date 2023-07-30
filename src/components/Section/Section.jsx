import React from 'react';
import PropTypes from 'prop-types';
import Style from './Section.module.css';

export const Section = props => {
  const { title, children } = props;
  return (
    <section className={Style.section}>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
