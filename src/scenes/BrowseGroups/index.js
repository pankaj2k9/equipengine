import React from "react"
import styled from "styled-components"
//
import HeaderBrowseGroups from "./components/HeaderBrowseGroups"
import BodyBrowseGroups from "./components/BodyBrowseGroups"

/**
   TODO:
   - Add components to Body.
 */

const ContainerBrowseGroups = styled.section`
  width: 80%;
  margin: 3em auto;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

const BrowseGroups = () => (
  <ContainerBrowseGroups>
    <HeaderBrowseGroups />
    <BodyBrowseGroups />
  </ContainerBrowseGroups>
)

export default BrowseGroups
