import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Panel = styled(({ className, title, children }) => (
  <section className={className}>
    <h4>{title}</h4>
    {children}
  </section>
))`
  padding: 28px 0;
  border-bottom: 1px solid #dadada;

  h4 {
    font-size: 1.1rem;
    color: #000000;
    font-weight: 800;
    margin: 0 0 21px 0;
  }

  @media screen and (min-width: 768px) {
    width: 65%;
  }
`;

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Panel;
