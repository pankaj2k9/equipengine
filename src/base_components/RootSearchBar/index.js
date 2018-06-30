import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import iconSearchO from "resources/images/searchO.svg"

import Form from "base_components/RootForm"

// create Input text
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  padding: 0.5em 1em;
  border-radius: 3px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 1.5em;

  > span {
    font-size: 1.1rem;
    top: -4px;
    position: relative;

    img {
      position: absolute;
      top: -10px;
      width: 30px;
      left: -9px;
    }
  }

  > input {
    margin-left: 1.5em;
    border: 0;
    &:focus {
      outline: 0;
    }
    ::placeholder {
      color: #c0c0c0;
    }
  }
`

const SearchBar = styled(({ className, placeholder }) => (
  <Form className={className}>
    <TextContainer>
      <span>
        <img alt="icon Search" src={iconSearchO} />
      </span>
      <input
        name="searchbar"
        type="text"
        placeholder="Search People"
        value=""
      />
    </TextContainer>
  </Form>
))`
  display: block;
`

SearchBar.propTypes = {
  placeholder: PropTypes.string
}

export default SearchBar
