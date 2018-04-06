import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'utils/css'
// components
import { Tab } from 'react-bootstrap'
import Tabs from 'base_components/Tabs'
import Breadcrumbs from 'base_components/Breadcrumbs'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

/**
  * -------------------------------------
  * AdminOrganisationSettings
  * @see TabOrganisationSettings
  * -------------------------------------
*/
const AdminOrganisationSettings = ({match}) => (
  <Fragment>
    <Breadcrumbs position='sticky' padding='4% 2%' />
    <BreadcrumbsItem to={match.url}>Organisation Settings</BreadcrumbsItem>
    <TabOrganisationSettings />
  </Fragment>
)

AdminOrganisationSettings.propTypes = {
  match: PropTypes.object.isRequired
}

export default AdminOrganisationSettings

/**
  * -------------------------------------
  * Styles for TabOrganisationSettings
  * @function
  * -------------------------------------
*/
const tabOrganisationSettingsStyles = css`
  .nav-tabs {
    display: flex;
    overflow: auto;

    li > a:last-child {
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .nav-tabs, .tab-content {
      padding: 0 35px;
    }

    .nav-tabs {
      overflow: hidden;
    }
  }
`

/**
  * -------------------------------------
  * TabOrganisationSettings
  * @see AdminOrganisationSettings
  * -------------------------------------
*/
const TabOrganisationSettings = tabOrganisationSettingsStyles(({className}) => (
  <Tabs className={className}>
    <Tab eventKey={1} title='Main Settings'>
      main settings
    </Tab>
    <Tab eventKey={2} title='Domain Mapping'>
      domain mapping
    </Tab>
    <Tab eventKey={3} title='Account Settings'>
      account settings
    </Tab>
    <Tab eventKey={4} title='Notifications'>
      notification
    </Tab>
  </Tabs>
))
