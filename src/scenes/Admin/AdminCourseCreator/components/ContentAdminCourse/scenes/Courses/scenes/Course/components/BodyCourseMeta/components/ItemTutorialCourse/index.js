import React from 'react'
//
import ContainerAdminPanel from 'scenes/Admin/components/ContainerAdminPanel'
import ListTutorialCourse from './components/ListTutorialCourse'

import ContainerBodyAdmin from 'scenes/Admin/components/ContainerAdminPanel/components/ContainerBodyAdmin'

// TODO: We need to extract this BodyTutorial component.
const ContainerBodyTutorial = ContainerBodyAdmin.extend`
  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`

const ItemTabTutorialCourse = () => (
  <ContainerAdminPanel>
    <ListTutorialCourse />
    <ContainerBodyTutorial>Body content</ContainerBodyTutorial>
  </ContainerAdminPanel>
)

export default ItemTabTutorialCourse
