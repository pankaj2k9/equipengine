import React from "react"
//
import ContainerBodyAdmin from "scenes/Admin/components/ContainerAdminPanel/components/ContainerBodyAdmin"
import { Tab } from "react-bootstrap"
import Tabs from "base_components/Tabs"
import ItemTabBasics from "./components/ItemTabBasics"
import ItemTabActions from "./components/ItemTabActions"
// styles
import { tabsLessonStyles } from "./styles"

const TabsLesson = tabsLessonStyles(({ className }) => (
  <ContainerBodyAdmin className={className}>
    <Tabs className="TabsLesson">
      <Tab eventKey={1} title="Basics">
        <ItemTabBasics />
      </Tab>
      <Tab eventKey={2} title="Actions">
        <ItemTabActions />
      </Tab>
      <Tab eventKey={3} title="Files">
        files
      </Tab>
    </Tabs>
  </ContainerBodyAdmin>
))

export default TabsLesson
