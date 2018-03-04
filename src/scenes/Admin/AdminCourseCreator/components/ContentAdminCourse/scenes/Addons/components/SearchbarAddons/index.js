import React from 'react'
import styled from 'styled-components'
// components
import Container from 'base_components/Container'
import Searchbar from 'base_components/RootSearchBar'

const ContainerSearchbarAddons = styled(Container)`
  padding-bottom: 0;
  margin-bottom: 0;

  @media screen and (min-width: 768px){
    justify-content: flex-end;
    margin: 0;
  }
`
// extend the styles of Searchbar.
const ExtendSearchbar = styled(Searchbar)`
  @media screen and (min-width: 768px){
    > div {
      margin-bottom: 0;
    }
  }
`

const SearchbarAddons = () => (
  <ContainerSearchbarAddons>
    <ExtendSearchbar placeholder='Search add-ons' />
  </ContainerSearchbarAddons>
)

export default SearchbarAddons
