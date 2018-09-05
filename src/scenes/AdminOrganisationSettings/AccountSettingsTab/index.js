import React, { Fragment, Component } from "react"
import { connect } from "react-redux"
import { toastr } from "react-redux-toastr"
import { bindActionCreators } from "redux"
import { compose, pure } from "recompose"
import { createStructuredSelector } from "reselect"
import joi from "joi"

import modal from "hoc/modal"

import { ADMIN_ROLE } from "services/constants"

import { types, selectors, actions } from "../ducks"
import {
  fetchNonAdmins,
  updateOrganizationAdmin,
  updateOrganizationNonAdmin
} from "../thunks"

import AdminsPanel from "./AdminsPanel"
import LanguagePanel from "./LanguagePanel"

import SelectItemModal from "base_components/SelectItemModal"
import UserInfoFormatter from "base_components/UserInfoFormatter"

import { Form, Button } from "./elements"

import { updateFieldValue, validate } from "utils/formFunctions"

const validationSchema = joi.object().keys({})

class ItemTabAccountSettings extends Component {
  state = {
    fields: {
      language: this.props.organization.language
    }
  }

  componentDidMount() {
    this.loadMoreNonAdmins()
  }

  onChange = (event, selector) => {
    const { fields } = this.state

    const nextFields = updateFieldValue(event, selector, fields)

    this.setState({
      fields: nextFields
    })
  }

  loadMoreNonAdmins = (current_page = 1) => {
    const { fetchNonAdmins } = this.props

    fetchNonAdmins({ current_page })
  }

  searchNonAdmins = term => {
    const { fetchNonAdmins } = this.props

    fetchNonAdmins({ term })
  }

  addAdmins = selectedIds => {
    const { addAdmins } = this.props

    addAdmins(selectedIds)
  }

  onSubmit = () => {
    const { fields: organization } = this.state

    const validationResult = validate(organization, validationSchema)

    if (validationResult.error) {
      toastr.error(
        "Validation error",
        validationResult.error.details[0].context.label
      )
    } else {
      const {
        admins,
        organization: { id },
        changeOrganization,
        updateOrganizationAdmin,
        updateOrganizationNonAdmin,
        nonAdmins
      } = this.props

      admins
        .filter(user => user.organization_settings.role !== ADMIN_ROLE)
        .forEach(user => {
          const { id } = user.organization_settings

          updateOrganizationAdmin({ id })
        })

      nonAdmins
        .filter(user => user.organization_settings.role === ADMIN_ROLE)
        .forEach(user => {
          const { id } = user.organization_settings

          updateOrganizationNonAdmin({ id })
        })

      changeOrganization({ id, organization }).then(action => {
        if (action.type === types.CHANGE_ORGANIZATION_SUCCESS) {
          toastr.success("Account settings", "Data is updated successfully")
        } else {
          toastr.error("Account settingsg", "Error while updating")
        }
      })
    }
  }

  render() {
    const {
      isFetchingNonAdmins,
      isOpen,
      onClose,
      onOpen,
      pagination,
      nonAdmins
    } = this.props

    const { language } = this.state.fields

    return (
      <Fragment>
        <Form>
          <AdminsPanel onOpen={onOpen} removeUser={this.removeAdmin} />
          <LanguagePanel language={language} onChange={this.onChange} />
          <Button onClick={this.onSubmit}>Update</Button>
        </Form>
        <SelectItemModal
          title="Add user to administrators"
          hint="Be careful - this will provide items access to everything related to this organization account"
          listTitle="Select a user to make an administrator"
          formatListItem={user => <UserInfoFormatter user={user} />}
          items={nonAdmins}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={this.addAdmins}
          loading={isFetchingNonAdmins}
          pagination={pagination}
          loadMore={this.loadMoreNonAdmins}
          onSearch={this.searchNonAdmins}
        />
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    admins: selectors.selectAdmins(),
    nonAdmins: selectors.selectNonAdmins(),
    pagination: selectors.selectNonAdminsPagination(),
    isFetchingNonAdmins: selectors.selectIsFetchingNonAdmins()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      addAdmins: actions.addOrganizationAdmins,
      fetchNonAdmins,
      updateOrganizationAdmin,
      updateOrganizationNonAdmin
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  modal,
  pure
)(ItemTabAccountSettings)
