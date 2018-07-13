import React, { Component } from "react"
import { compose } from "recompose"
import joi from "joi"
import { toastr } from "react-redux-toastr"

import ButtonUpdate from "base_components/ButtonUpdate"

import GeneralInfoGroup from "./GeneralInfoGroup"
import UsersGroup from "./UsersGroup"
import NoticeboardGroup from "./NoticeboardGroup"
import ControlGroup from "./ControlGroup"

import { updateFieldValue, validate } from "utils/formFunctions"

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
    const {
      groupName,
      groupDescription,
      groupSizeLimit,
      isGroupNoticeboardActive,
      areStudentsCanPostContent,
      areStudentsCanComment,
      isGroupActive
    } = this.state

    return (
      <div>
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
      </div>
    )
  }
}

export default ItemTabAdminGroupSettings
