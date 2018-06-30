import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import iconArrowLeft from "resources/images/arrowLeft.svg"
import iconWheel from "resources/images/wheel.svg"
import ProfileForm from "./components/ProfileForm"

// TODO probably move to base_component as RouteIconButton
const BackIconButton = styled(({ className }) => (
  <Link className={className} to="/secure/home">
    <img alt="icon arrow left" src={iconArrowLeft} />
  </Link>
))`
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 55px;
  }
  margin: 0.5em;
  img {
    width: 30px;
  }
`

const Centerer = styled.section`
  max-width: 615px;
  width: 80%;
  margin: 3em auto;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

const Header = styled(({ className, icon, title }) => (
  <h4 className={className}>
    <img src={icon} alt={title} />
    {title}
  </h4>
))`
  color: #80808b;
  img {
    margin-right: 1em;
    margin-bottom: 0.2em;
    width: 1em;
  }
`

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
      }
    }
  }

  handleResetPassword = () => {}

  handleUpdate = profile => {}

  render() {
    // TODO from props
    const { profile } = this.state
    return (
      <div>
        <BackIconButton />
        <Centerer>
          <Header icon={iconWheel} title="Account Settings" />
          <ProfileForm
            profile={profile}
            onSubmit={this.handleUpdate}
            onResetPassword={this.handleResetPassword}
          />
        </Centerer>
      </div>
    )
  }
}

export default AccountSettings
