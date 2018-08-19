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

import GeneralGroupInfo from "./GeneralGroupInfo"
import GroupControls from "./GroupControls"
import GroupNoticeboardControls from "./GroupNoticeboardControls"
import GroupUsersControls from "./GroupUsersControls"
import { selectors, types } from "../ducks"
import { updateGroup } from "../thunks"

const ValidationSchema = joi.object().keys({
  title: joi.string().required(),
  description: joi.string().required(),
  user_limit: joi.number(),
  student_can_post: joi.boolean(),
  noticeboard_enabled: joi.boolean(),
  student_can_comment: joi.boolean()
})

const watchFields = fields => ({
  ...fields,
  student_can_post: !fields.noticeboard_enabled
    ? false
    : fields.student_can_post,
  student_can_comment: !fields.noticeboard_enabled
    ? false
    : fields.student_can_comment
})

class ItemTabAdminGroupSettings extends Component {
  state = {
    id: null,
    fields: {
      description: "",
      noticeboard_enabled: false,
      student_can_comment: false,
      student_can_post: false,
      title: "",
      user_limit: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { group } = props

    if (state.id !== group.id) {
      return {
        id: group.id,
        fields: {
          description: group.description,
          noticeboard_enabled: group.noticeboard_settings.noticeboard_enabled,
          student_can_comment: group.noticeboard_settings.student_can_comment,
          student_can_post: group.noticeboard_settings.student_can_post,
          title: group.title,
          user_limit: group.user_limit
        }
      }
    }

    return {}
  }

  handleChange = event => {
    const { fields } = this.state

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value

    const nextFields = compose(
      watchFields,
      fields => updateFieldValue(value, event.target.name, fields)
    )(fields)

    this.setState({ fields: nextFields })
  }

  handleSubmit = () => {
    const { group, updateGroup } = this.props
    const { fields } = this.state

    const result = validate(fields, ValidationSchema)

    if (result.error) {
      toastr.error("Validation error", result.error.details[0].context.label)
    } else {
      updateGroup({
        id: group.id,
        group: fields
      }).then(({ type }) => {
        if (type === types.UPDATE_GROUP_SUCCESS) {
          toastr.success("Notifications settings", "Data updated successfully")
        } else {
          toastr.error("Error", "Something went wrong")
        }
      })
    }
  }

  render() {
    const { isUpdatingGroup } = this.props
    const {
      fields: {
        description,
        noticeboard_enabled,
        student_can_comment,
        student_can_post,
        title,
        user_limit
      }
    } = this.state

    return isUpdatingGroup ? (
      <Loading />
    ) : (
      <Fragment>
        <GeneralGroupInfo
          title={title}
          description={description}
          onChange={this.handleChange}
        />

        <GroupUsersControls
          userLimit={user_limit}
          onChange={this.handleChange}
        />

        <GroupNoticeboardControls
          isNoticeboardEnabled={noticeboard_enabled}
          canStudentPost={student_can_post}
          canStudentComment={student_can_comment}
          onChange={this.handleChange}
        />

        <GroupControls />

        <ButtonUpdate onClick={this.handleSubmit}>Update</ButtonUpdate>
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    group: selectors.selectGroup(),
    isUpdatingGroup: selectors.selectIsUpdatingGroup()
  })

const mapDispatch = dispatch => bindActionCreators({ updateGroup }, dispatch)

export default connect(
  mapState,
  mapDispatch
)(ItemTabAdminGroupSettings)
