import React, { Component } from "react"
import IconSettings from "react-icons/lib/fa/cog"

import PageWrapper from "global/PageWrapper"
import ProfileForm from "./components/ProfileForm"

class AccountSettings extends Component {
  // TODO componentDidMount() { this.props.actions.fetchProfile() }
  state = {
    profile: {
      email: "bla@example.com",
      firstName: "Alex",
      lastName: "Soroka",
      phone: "+123456",
      birthDate: null,
      address: "415 Acacia Ave. Jamaica, NY 11435",
      notificationFrequency: {
        activitySummary: false,
        courseResponse: true,
        emailNotifications: true,
        groupDiscussion: false,
        privateMessage: true
      },
      country: "",
      state: "",
      zipCode: ""
    }
  }

  handleResetPassword = () => {}

  handleUpdate = profile => {}

  render() {
    const { profile } = this.state
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
        <ProfileForm
          profile={profile}
          onSubmit={this.handleUpdate}
          onResetPassword={this.handleResetPassword}
        />
      </PageWrapper>
    )
  }
}

export default AccountSettings
