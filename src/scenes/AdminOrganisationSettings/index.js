import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"
import { Tab } from "react-bootstrap"

import BorderedTitle from "base_components/BorderedTitle"
import Tabs from "base_components/Tabs"
import MainSettings from "./MainSettingsTab"
import DomainMapping from "./DomainMappingTab"
import AccountSettings from "./AccountSettingsTab"
import Notifications from "./NotificationsTab"

import { Container } from "./elements"

const TabOrganisationSettings = () => (
  <Container>
    <Tabs>
      <Tab eventKey={1} title="Main Settings">
        <MainSettings />
      </Tab>
      <Tab eventKey={2} title="Domain Mapping">
        <DomainMapping />
      </Tab>
      <Tab eventKey={3} title="Account Settings">
        <AccountSettings />
      </Tab>
      <Tab eventKey={4} title="Notifications">
        <Notifications />
      </Tab>
    </Tabs>
  </Container>
)

const AdminOrganisationSettings = () => (
  <Fragment>
    <BorderedTitle title="Organisation Settings" />
    <TabOrganisationSettings />
  </Fragment>
)
AdminOrganisationSettings.propTypes = {
  match: PropTypes.object.isRequired
}

export default compose(pure)(AdminOrganisationSettings)
