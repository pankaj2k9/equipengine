import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isNil } from 'ramda'

const Panel = styled(({ className, title, children, AdditionalTitle }) => (
  <section className={className}>
    {!isNil(title) && (
      <header>
        <h4>{title}</h4>
        {!isNil(AdditionalTitle) && <AdditionalTitle />}
      </header>
    )}
    {children}
  </section>
))`
  padding-top: 28px;
  padding-bottom: ${(props) => props.paddingBottom};
  border-bottom: ${(props) => props.borderBottom};
  margin-bottom: ${(props) => props.marginBottom};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25em;

    h4 {
      font-size: 1.1rem;
      color: #000000;
      font-weight: 800;
      margin: 0;
    }
  }

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.isFullWidth ? '100%' : '65%')};

    header {
      margin-bottom: 1.8em;
    }
  }
`

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  AdditionalTitle: PropTypes.func,
  isFullWidth: PropTypes.bool,
  marginBottom: PropTypes.string,
  paddingBottom: PropTypes.string
}

Panel.defaultProps = {
  borderBottom: '1px solid #dadada',
  marginBottom: '0',
  paddingBottom: '0'
}

export default Panel
