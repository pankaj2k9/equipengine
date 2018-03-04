import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// for our breadcrumbs
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
// components
import SearchbarAddons from './components/SearchbarAddons'
import TabsCoursePackages from './components/TabsCoursePackages'

const ContainerAddons = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 53px;
    padding-bottom: 4em;
  }
`

const Addons = ({match}) => (
  <ContainerAddons>
    <BreadcrumbsItem to={match.url}>Addons</BreadcrumbsItem>
    <SearchbarAddons />
    <TabsCoursePackages />
  </ContainerAddons>
)

Addons.propTypes = {
  match: PropTypes.object.isRequired
}

export default Addons
