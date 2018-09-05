import React from "react"
import { Tab } from "react-bootstrap"

import Tabs from "base_components/Tabs"

import AccountSettings from "../../AccountSettingsTab"
import DomainMapping from "../../DomainMappingTab"
import MainSettings from "../../MainSettingsTab"
import Notifications from "../../NotificationsTab"

import { Container } from "./elements"

const OrganizationSettingsTabs = ({ organization, changeOrganization }) => (
  <Container>
    <Tabs>
      <Tab eventKey={1} title="Main Settings">
        <MainSettings
          organization={organization}
          changeOrganization={changeOrganization}
        />
      </Tab>
      <Tab eventKey={2} title="Domain Mapping">
        <DomainMapping
          organization={organization}
          changeOrganization={changeOrganization}
        />
      </Tab>
      <Tab eventKey={3} title="Account Settings">
        <AccountSettings
          organization={organization}
          changeOrganization={changeOrganization}
        />
      </Tab>
      <Tab eventKey={4} title="Notifications">
        <Notifications
          organization={organization}
          changeOrganization={changeOrganization}
        />
      </Tab>
    </Tabs>
  </Container>
)

export default OrganizationSettingsTabs
