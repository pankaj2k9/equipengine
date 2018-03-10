import React from 'react'
//
import DragDrop from 'base_components/DragDrop'
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
    <DragDrop>
      <ListTutorial />
    </DragDrop>
  </ContainerListTutorialCourse>
)

export default ListTutorialCourse
