import React from 'react'
//
import ContainerAdminPanel from 'scenes/Admin/components/ContainerAdminPanel'
import ListTutorialCourse from './components/ListTutorialCourse'
import TabsLesson from './components/TabsLesson'

const ItemTabTutorialCourse = () => (
  <ContainerAdminPanel>
    <ListTutorialCourse />
    <TabsLesson />
  </ContainerAdminPanel>
)

export default ItemTabTutorialCourse
