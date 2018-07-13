import React, { Component } from "react"
import joi from "joi"
import { toastr } from "react-redux-toastr"
import { compose, pure } from "recompose"

import ButtonUpdate from "base_components/ButtonUpdate"
import Button from "base_components/RootButton"
import { FormGroup, Text, TextArea, Label } from "base_components/RootForm"
import { Switch } from "base_components/RootForm"
import ListControl, { ListItemControl } from "base_components/ListControl"
import Panel from "base_components/Panel"
import { NumberInput } from "base_components/RootForm"

import {
  ContainerFormGroups,
  FormGroupUser,
  GeneralInfoRoot,
  LabelNoticeBoard,
  NoticeBoardRoot,
  PanelUsersLabel,
  ControlGroupRoot
} from "./elements"

const validationSchema = joi.object().keys({})

const GeneralInfoGroup = () => (
  <GeneralInfoRoot title="General Information">
    <FormGroup>
      <Label htmlFor="group-name">Group Name</Label>
      <Text name="group-name" placeholder="Connect: Level 1" />
    </FormGroup>
    <FormGroup>
      <Label htmlFor="group-discussion">Group Description</Label>
      <TextArea name="group-name" placeholder="Connect: Level 1" row={4} />
    </FormGroup>
  </GeneralInfoRoot>
)

const UsersGroup = () => (
  <Panel title="Users">
    <FormGroupUser>
      <PanelUsersLabel>Group Size Limit</PanelUsersLabel>
      <NumberInput defaultValue={0} min={0} max={5000} />
    </FormGroupUser>
  </Panel>
)

const NoticeBoardGroup = ({ className }) => (
  <NoticeBoardRoot
    className={className}
    title="Group Noticeboard"
    AdditionalTitle={() => <Switch name="toggle-all" />}
  >
    <ContainerFormGroups>
      <FormGroup isFlex>
        <LabelNoticeBoard>Students can post new content</LabelNoticeBoard>
        <Switch name="post-content" />
      </FormGroup>
      <FormGroup isFlex>
        <LabelNoticeBoard>Students can comment</LabelNoticeBoard>
        <Switch name="post-comment" />
      </FormGroup>
    </ContainerFormGroups>
  </NoticeBoardRoot>
)

const ControlGroup = () => (
  <ControlGroupRoot>
    <ListControl>
      <ListItemControl>
        <Button large light lightBorder>
          Pause Group
        </Button>
        <Label light>
          Group remains visible to teachers but access is denied for students.
        </Label>
      </ListItemControl>
      <ListItemControl>
        <Button light large lightBorder>
          Remove Group
        </Button>
        <Label light>
          Once this group has been removed it cannot be restored. All data will
          be lost.
        </Label>
      </ListItemControl>
    </ListControl>
  </ControlGroupRoot>
)

class AdminGroupSettings extends Component {
  state = {
    groupName: "",
    groupDescription: "",
    groupSizeLimit: "",
    isGroupNoticeBoardActive: false,
    areStudentsCanPost: false,
    areStudentsCanComment: false
  }

  // onChange = (e, selector) => {
  //   const fields = this.state

  //   const nextFields = updateFieldValue(e, selector, fields)

  //   this.setState(nextFields)
  // }

  // onSubmit = () => {
  //   const fields = this.state

  //   const validationResult = validate(fields, validationSchema)

  //   if (!validationResult.error) {
  //     return toastr.success(
  //       "Notifications settings",
  //       "Data updated successfully"
  //     )
  //   }

  //   toastr.error(
  //     "Validation error",
  //     validationResult.error.details[0].context.label
  //   )
  // }

  render() {
    return (
      <div>
        <GeneralInfoGroup />
        <UsersGroup />
        <NoticeBoardGroup />
        <ControlGroup />
        <ButtonUpdate onClick={this.onSubmit}>Update</ButtonUpdate>
      </div>
    )
  }
}

export default compose(pure)(AdminGroupSettings)
