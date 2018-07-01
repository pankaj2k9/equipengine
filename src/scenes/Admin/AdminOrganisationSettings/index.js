import React, { Fragment } from "react"
// components
import { Tab } from "react-bootstrap"
import Tabs from "base_components/Tabs"
import Breadcrumbs from "base_components/Breadcrumbs"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import ItemTabMainSettings from "./components/ItemTabMainSettings"
import ItemTabDomainMapping from "./components/ItemTabDomainMapping"
import ItemTabAccountSettings from "./components/ItemTabAccountSettings"
// assets
import { tabOrganisationSettingsStyles } from "./styles"
import adminOrganisationSettings from "./propTypes"

/**
 * -------------------------------------
 * AdminOrganisationSettings
 * @see TabOrganisationSettings
 * -------------------------------------
 */
const AdminOrganisationSettings = ({ match }) => (
  <Fragment>
    <Breadcrumbs position="sticky" padding="4% 2%" />
    <BreadcrumbsItem to={match.url}>Organisation Settings</BreadcrumbsItem>
    <TabOrganisationSettings />
  </Fragment>
)

AdminOrganisationSettings.propTypes = adminOrganisationSettings.prop

export default AdminOrganisationSettings

/**
 * -------------------------------------
 * TabOrganisationSettings
 * @see AdminOrganisationSettings
 * -------------------------------------
 */
const TabOrganisationSettings = tabOrganisationSettingsStyles(
  ({ className }) => (
    <Tabs className={className}>
      <Tab eventKey={1} title="Main Settings">
        <ItemTabMainSettings />
      </Tab>
      <Tab eventKey={2} title="Domain Mapping">
        <ItemTabDomainMapping />
      </Tab>
      <Tab eventKey={3} title="Account Settings">
        <ItemTabAccountSettings />
      </Tab>
      <Tab eventKey={4} title="Notifications">
        notification
      </Tab>
    </Tabs>
  )
)
