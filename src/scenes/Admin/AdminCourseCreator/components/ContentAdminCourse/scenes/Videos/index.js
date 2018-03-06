import React from 'react'
import PropTypes from 'prop-types'
//
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import HeaderAdminCourse from '../components/HeaderAdminCourse'
import ContainerAdminCourse from '../components/ContainerAdminCourse'
import DropdownSortBy from './components/DropdownSortBy'

const Videos = ({match}) => (
  <ContainerAdminCourse>
    <BreadcrumbsItem to={match.url}>Videos</BreadcrumbsItem>
    <HeaderAdminCourse
      ControlButtonsGroup={DropdownSortBy}
      searchbarInfo={{
        placeholder: 'Search videos'
      }}
    />
  </ContainerAdminCourse>
)

Videos.propTypes = {
  match: PropTypes.object.isRequired
}

export default Videos
