import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import joi from "joi"
import { toastr } from "react-redux-toastr"
import { createStructuredSelector } from "reselect"
import moment from "moment"

import ButtonUpdate from "base_components/ButtonUpdate"
import UserDetails from "base_components/UserDetails"
import UserContacts from "base_components/UserContacts"
import Loading from "base_components/Loading"
import Centerer from "base_components/PageCenterer"

import { STUDENT_ROLE } from "services/constants"

import PanelAccountRole from "./PanelAccountRole"
import PanelControlGroup from "./PanelControlGroup"
import PanelGroups from "./PanelGroups"

import { MainForm, ResponsivePanel } from "./elements"
import {
  updateFieldValue,
  validate,
  getDropdownValue
} from "utils/formFunctions"

import features from "features"

const validationSchema = joi.object().keys({
  firstName: joi
    .string()
    .required()
    .label("First name is required"),
  lastName: joi
    .string()
    .required()
    .label("Last name is required"),
  email: joi
    .string()
    .email()
    .required()
    .label("Email name is required"),
  phoneNumber: joi
    .number()
    .required()
    .label("Phone number name is required")
})

class UpdateUserForm extends Component {
  state = {
    userId: this.props.user && this.props.user.id,
    firstName: this.props.user && this.props.user.first_name,
    lastName: this.props.user && this.props.user.last_name,
    email: this.props.user && this.props.user.email,
    phoneNumber: this.props.user && this.props.user.phone_number,
    dateOfBirth: this.props.user && this.props.user.date_of_birth,
    address: this.props.user && this.props.user.address,
    groupIds: this.props.user.participated_group_ids,
    activityStudentIds: this.props.user.organization_settings.activity_settings
      .activity_student_ids,
    countryId: "",
    stateId: "",
    zipCode: this.props.user && this.props.user.zip_code,
    role:
      this.props.user &&
      this.props.user.organization_settings &&
      this.props.user.organization_settings.role,
    messengerAccess: this.props.user.organization_settings
      .messanger_access_enabled,
    fileControlPrivileges: this.props.user.organization_settings
      .files_controll_enabled
  }

  componentDidMount() {
    const { countries, states } = this.props

    !countries.length && this.props.fetchCountries()
    !states.length && this.props.fetchStates()
  }

  static getDerivedStateFromProps(props, state) {
    let result = {}

    if (props.countries.length !== 0 && props.user.country_id) {
      result = {
        countryId: state.countryId || props.user.country_id
      }
    }

    if (props.states.length !== 0 && props.user.state_id) {
      result = {
        ...result,
        stateId: state.stateId || props.user.state_id
      }
    }

    return Object.keys(result).length !== 0 ? result : null
  }

  onChange = event => {
    const fields = this.state
    const selector = event.currentTarget.name

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value

    const nextFields = updateFieldValue(value, selector, fields)

    this.setState(nextFields)
  }

  handleUpdateUser = e => {
    e.preventDefault()

    let fields = this.state
    const { organization_settings } = this.props.user
    const validationResult = validate(fields, validationSchema)

    fields = {
      ...fields,
      date_of_birth: moment(fields.dateOfBirth)
        .toDate()
        .toString(),
      phone_number: fields.phoneNumber,
      zip_code: fields.zipCode,
      first_name: fields.firstName,
      last_name: fields.lastName,
      country_id: fields.countryId,
      state_id: fields.stateId,
      participated_group_ids: fields.groupIds,
      organization_users_attributes: {
        id: organization_settings.id,
        role: fields.role,
        user_id: fields.userId,
        files_controll_enabled: fields.fileControlPrivileges,
        activity_student_ids: fields.activityStudentIds,
        messanger_access_enabled: fields.messengerAccess
      }
    }

    if (!validationResult.error) {
      this.props
        .updateUser(fields)
        .then(action => {
          if (action.type === features.adminUsers.types.UPDATE_USER_SUCCESS) {
            toastr.success("Success", "User is successfully updated")
          } else {
            toastr.error("Error", "User update failed")
          }
        })
        .catch(err => {
          toastr.error(
            "Validation error",
            [Object.keys(err.errors)] + [Object.values(err.errors)]
          )
        })
    }
  }

  handleSendResetPasswordToken = () => {
    const { user } = this.props
    if (user) {
      this.props.onSendResetPasswordToken(user)
    }
  }

  handleUserGroupsChange = event => {
    const { groupIds } = this.state
    const group_id = parseInt(event.target.id.replace("group-", ""), 10)
    const idIndex = groupIds.includes(group_id)

    this.setState({
      groupIds: idIndex
        ? groupIds.filter(id => id !== group_id)
        : [...groupIds, group_id]
    })
  }

  handleActivityStudentsChange = event => {
    const { activityStudentIds } = this.state
    const student_id = parseInt(event.target.id.replace("student-", ""), 10)
    const idIndex = activityStudentIds.includes(student_id)

    this.setState({
      activityStudentIds: idIndex
        ? activityStudentIds.filter(id => id !== student_id)
        : [...activityStudentIds, student_id]
    })
  }

  handleBirthDateChange = value =>
    this.setState({ dateOfBirth: value.toDate().toString() })

  handleDropdownChange = (value, selector) => {
    this.setState({
      [selector]: value
    })
  }

  handleSuspendUser = () => {
    const { organization_settings } = this.props.user
    const { userId } = this.state

    const updateFields = {
      userId,
      organization_users_attributes: {
        id: organization_settings.id,
        status: null
      }
    }

    this.props.updateUser(updateFields).then(action => {
      if (action.type === features.adminUsers.types.UPDATE_USER_SUCCESS) {
        toastr.success("Success", "User is successfully suspended")
      } else {
        toastr.error("Error", "User suspend failed")
      }
    })
  }

  handleRemoveUser = () => {
    const { userId } = this.state

    this.props.removeUser(userId).then(action => {
      if (action.type === features.adminUsers.types.REMOVE_USER_SUCCESS) {
        toastr.success("Success", "User is successfully removed")
      } else {
        toastr.error("Error", "User remove failed")
      }
    })
  }

  render() {
    const {
      address,
      activityStudentIds,
      messengerAccess,
      dateOfBirth,
      countryId,
      email,
      firstName,
      lastName,
      phoneNumber,
      role,
      stateId,
      groupIds,
      zipCode,
      fileControlPrivileges
    } = this.state
    const { groups, isFetchingAddress, states, users, user } = this.props

    const students =
      users &&
      users.filter(user => user.organization_settings.role === STUDENT_ROLE)

    const usersGroups = this.props.groups.filter(group =>
      groupIds.includes(group.id)
    )

    if (!user && users.length !== 0) {
      return <Centerer>Please, select any group to see content</Centerer>
    }

    return (
      <MainForm>
        <ResponsivePanel title="User Details">
          <UserDetails
            firstName={firstName}
            lastName={lastName}
            email={email}
            changeFirstName={this.onChange}
            changeLastName={this.onChange}
            changeEmail={this.onChange}
            changeUserAvatar={this.onChange}
            onSendResetPasswordToken={this.handleSendResetPasswordToken}
            isAvatarEditable
          />
        </ResponsivePanel>

        <ResponsivePanel>
          <UserContacts
            phone={phoneNumber}
            birthDate={dateOfBirth}
            address={address}
            changePhone={this.onChange}
            changeBirthDate={this.handleBirthDateChange}
          />

          {isFetchingAddress ? (
            <Loading />
          ) : (
            <features.address.pages.AddressInfo
              countries={this.props.countries}
              states={states}
              address={address}
              country={countryId}
              state={stateId}
              zipCode={zipCode}
              changeAddress={this.onChange}
              changeCountry={value => {
                this.handleDropdownChange(getDropdownValue(value), "countryId")
              }}
              changeState={value =>
                this.handleDropdownChange(getDropdownValue(value), "stateId")
              }
              changeZipCode={this.onChange}
            />
          )}
        </ResponsivePanel>

        <PanelGroups
          handleUserGroupsChange={this.handleUserGroupsChange}
          groups={groups}
          usersGroups={usersGroups}
        />

        {!users ? (
          <Loading />
        ) : (
          <PanelAccountRole
            role={role}
            fileControlPrivileges={fileControlPrivileges}
            students={students}
            onChange={this.onChange}
            handleActivityStudentsChange={this.handleActivityStudentsChange}
            activityStudents={activityStudentIds}
            handleDropdownChange={this.handleDropdownChange}
            messengerAccess={messengerAccess}
          />
        )}

        <PanelControlGroup
          suspendUser={this.handleSuspendUser}
          removeUser={this.handleRemoveUser}
        />
        <ButtonUpdate onClick={this.handleUpdateUser}>Update</ButtonUpdate>
      </MainForm>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    countries: features.address.selectors.selectCountries(),
    states: features.address.selectors.selectStates(),
    isFetchingAddress: features.address.selectors.selectIsFetchingAddress()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCountries: features.address.actions.fetchCountries,
      fetchStates: features.address.actions.fetchStates,
      updateUser: features.adminUsers.actions.updateUser,
      removeUser: features.adminUsers.actions.removeUser
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(UpdateUserForm)
