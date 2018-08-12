import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
//
import Container from "base_components/Container"
import SearchBar from "base_components/RootSearchBar"

import RootButton from "base_components/RootButton"

import VideoModal from "../CreateVideoModal"
import modal from "hoc/modal"

// create a higher-order-components for extending the styles of Searchbar
const SearchbarAdminCourse = styled(SearchBar)`
  margin-top: 10px;

  > div {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`

// Container header
const ContainerHeader = Container.extend`
  padding: 1.5em 2%;
  margin: 0;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const SearchActionBar = ({
  ControlButtonsGroup,
  searchbarInfo: { value, onChange, placeholder, onSubmit },
  onOpen,
  onClose,
  isOpen
}) => (
  <ContainerHeader>
    {ControlButtonsGroup && <ControlButtonsGroup />}
    <SearchbarAdminCourse
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onClick={onSubmit}
    />
    {onOpen && <RootButton onClick={onOpen}>Upload</RootButton>}
    {isOpen && (
      <VideoModal isOpen={isOpen} onClose={onClose} onSubmit={() => {}} />
    )}
  </ContainerHeader>
)

SearchActionBar.propTypes = {
  searchbarInfo: PropTypes.object.isRequired
}

export default modal(SearchActionBar)
