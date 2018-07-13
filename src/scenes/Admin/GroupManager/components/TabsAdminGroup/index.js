import React from "react"

import { Tab } from "react-bootstrap"

import Tabs from "base_components/Tabs"

import ContainerBodyAdmin from "../../../components/ContainerAdminPanel/components/ContainerBodyAdmin"
import ItemTabAdminGroupSettings from "./ItemTabAdminGroupSettings"
import ItemTabAdminGroupUsers from "./ItemTabAdminGroupUsers"
import ItemTabAdminGroupCourses from "./ItemTabAdminGroupCourses"

const TabsAdminGroup = () => (
  <ContainerBodyAdmin>
    <Tabs>
      <Tab eventKey={1} title="Courses">
        <ItemTabAdminGroupCourses />
      </Tab>
      <Tab eventKey={2} title="Users">
        <ItemTabAdminGroupUsers />
      </Tab>
      <Tab eventKey={3} title="Settings">
        <ItemTabAdminGroupSettings />
      </Tab>
    </Tabs>
  </ContainerBodyAdmin>
)

export default TabsAdminGroup
