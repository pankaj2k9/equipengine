import React from "react"

import { FormGroup, Switch } from "base_components/RootForm"

import { Root, LabelNoticeBoard, ContainerFormGroups } from "./elements"

const PanelGroupNoticeBoard = () => (
  <Root
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
  </Root>
)

export default PanelGroupNoticeBoard
