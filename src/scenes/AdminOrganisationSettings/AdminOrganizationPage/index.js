import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { compose, pure } from "recompose"
import { createStructuredSelector } from "reselect"

import features from "features"

import { selectors } from "../ducks"
import { fetchOrganization, changeOrganization } from "../thunks"

import BorderedTitle from "base_components/BorderedTitle"
import Loading from "base_components/Loading"

import OrganizationSettingsTabs from "./OrganizationSettingsTabs"

class AdminOrganizationPage extends Component {
  componentDidMount() {
    const {
      user: {
        organization_ids: [id]
      },
      fetchOrganization
    } = this.props

    fetchOrganization(id)
  }

  render() {
    const {
      organization,
      isFetchingOrganizations,
      changeOrganization
    } = this.props

    return (
      <Fragment>
        <BorderedTitle title="Organisation Settings" />
        {isFetchingOrganizations ? (
          <Loading />
        ) : (
          <OrganizationSettingsTabs
            organization={organization}
            changeOrganization={changeOrganization}
          />
        )}
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    organization: selectors.selectOrganization(),
    user: features.login.selectors.selectCurrentUser(),
    isFetchingOrganizations: selectors.selectIsFetchingOrganization()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchOrganization,
      changeOrganization
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  pure
)(AdminOrganizationPage)
