import joi from "joi"
import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { toastr } from "react-redux-toastr"
import { compose } from "recompose"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"

import ButtonUpdate from "base_components/ButtonUpdate"
import Loading from "base_components/Loading"
import { updateFieldValue, validate } from "utils/formFunctions"

import GeneralInfoGroup from "./GeneralInfoGroup"
import UsersGroup from "./UsersGroup"
import NoticeboardGroup from "./NoticeboardGroup"
import ControlGroup from "./ControlGroup"
import { selectors } from "../ducks"

const validationSchema = joi.object().keys({})

// Disable and keep disabled both
// areStudentsCanPostContent and areStudentsCanComment
// if areStudentsCanPostContent is disabled
// TODO: move this logic to the store
const watchFields = fields => {
  let nextFields = { ...fields }

  if (!fields.isGroupNoticeboardActive) {
    nextFields.areStudentsCanPostContent = false
    nextFields.areStudentsCanComment = false
  }

  return nextFields
}

class ItemTabAdminGroupSettings extends Component {
  state = {
    groupName: "",
    groupDescription: "",
    groupSizeLimit: 0,
    isGroupNoticeboardActive: false,
    areStudentsCanPostContent: false,
    areStudentsCanComment: false,
    isGroupActive: false
  }

  onChange = (e, selector) => {
    const fields = this.state

    const nextFields = compose(
      fields => updateFieldValue(e, selector, fields),
      watchFields
    )(fields)

    this.setState(nextFields)
  }

  onSubmit = () => {
    const fields = this.state

    const validationResult = validate(fields, validationSchema)

    if (!validationResult.error) {
      return toastr.success(
        "Notifications settings",
        "Data updated successfully"
      )
    }

    toastr.error(
      "Validation error",
      validationResult.error.details[0].context.label
    )
  }

  render() {
    const { isUpdatingGroup } = this.props
    const {
      areStudentsCanPostContent,
      areStudentsCanComment,
      groupName,
      groupDescription,
      groupSizeLimit,
      isGroupNoticeboardActive,
      isGroupActive
    } = this.state

    return isUpdatingGroup ? (
      <Loading />
    ) : (
      <Fragment>
        <GeneralInfoGroup
          groupName={groupName}
          groupDescription={groupDescription}
          onChange={this.onChange}
        />
        <UsersGroup groupSizeLimit={groupSizeLimit} onChange={this.onChange} />
        <NoticeboardGroup
          isGroupNoticeboardActive={isGroupNoticeboardActive}
          areStudentsCanPostContent={areStudentsCanPostContent}
          areStudentsCanComment={areStudentsCanComment}
          onChange={this.onChange}
        />
        <ControlGroup isGroupActive={isGroupActive} onChange={this.onChange} />
        <ButtonUpdate onClick={this.onSubmit}>Update</ButtonUpdate>
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    isUpdatingGroup: selectors.selectIsUpdatingGroup()
  })

const mapDispatch = dispatch => bindActionCreators({}, dispatch)

export default compose(component =>
  connect(
    mapState,
    mapDispatch
  )(component)
)(ItemTabAdminGroupSettings)
