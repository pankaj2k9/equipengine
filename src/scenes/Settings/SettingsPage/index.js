import React, { Component } from "react"
import IconSettings from "react-icons/lib/fa/cog"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"

import features from "features"
import PageWrapper from "global/PageWrapper"
import ProfileForm from "../ProfileForm"
import { selectors } from "../selectors"
import { types } from "../ducks"
import { updateSettings } from "../thunks"
import Loading from "base_components/Loading"

class AccountSettings extends Component {
  componentDidMount() {
    this.props.fetchCountries()
    this.props.fetchStates()
  }

  handleUpdateSettings = settings =>
    this.props.updateSettings(settings).then(action => {
      if (action.type === types.UPDATE_SETTINGS_SUCCESS) {
        toastr.success("Success", "User is succefully updated")
      } else {
        toastr.error("Error", "User update failed")
      }
    })

  render() {
    const {
      user,
      isUpdatingSettings,
      countries,
      states,
      isFetchingAddress
    } = this.props

    return (
      <PageWrapper
        title="Account Settings"
        margin="3em 0 0 17em"
        icon={
          <IconSettings
            size={21}
            style={{
              verticalAlign: "baseline"
            }}
          />
        }
      >
        {isUpdatingSettings ? (
          <Loading />
        ) : (
          <ProfileForm
            profile={user}
            onSubmit={this.handleUpdateSettings}
            countries={countries}
            states={states}
            isFetchingAddress={isFetchingAddress}
          />
        )}
      </PageWrapper>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    user: features.login.selectors.selectCurrentUser(),
    isUpdatingSettings: selectors.selectIsUpdatingSettings(),
    countries: features.address.selectors.selectCountries(),
    states: features.address.selectors.selectStates(),
    isFetchingAddress: features.address.selectors.selectIsFetchingAddress()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      updateSettings,
      fetchCountries: features.address.actions.fetchCountries,
      fetchStates: features.address.actions.fetchStates
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(AccountSettings)
