import React from 'react'
//
import ContainerFilterableList from 'scenes/Admin/components/ContainerAdminPanel/components/ContainerFilterableList'
import HeaderTutorialCourse from './components/HeaderTutorialCourse'
import ListTutorial from './components/ListTutorial'

const ContainerListTutorialCourse = ContainerFilterableList.extend`
  @media screen and (min-width: 768px) {
    position: relative;
  }
`

const ListTutorialCourse = () => (
  <ContainerListTutorialCourse>
    <HeaderTutorialCourse />
    <ListTutorial />
  </ContainerListTutorialCourse>
)

export default ListTutorialCourse
