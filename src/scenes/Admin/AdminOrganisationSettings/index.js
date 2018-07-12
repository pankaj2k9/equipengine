import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"

import { Tab } from "react-bootstrap"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"

import Tabs from "base_components/Tabs"
import Breadcrumbs from "base_components/Breadcrumbs"

import {
  MainSettings,
  DomainMapping,
  AccountSettings,
  Notifications
} from "./Tabs"

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

const AdminOrganisationSettings = ({ match }) => (
  <Fragment>
    <Breadcrumbs padding="4% 2%" />
    <BreadcrumbsItem to={match.url}>Organisation Settings</BreadcrumbsItem>
    <TabOrganisationSettings />
  </Fragment>
)
AdminOrganisationSettings.propTypes = {
  match: PropTypes.object.isRequired
}

export default compose(pure)(AdminOrganisationSettings)
