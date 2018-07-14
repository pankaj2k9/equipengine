import React from "react"

import { FormGroup, Switch } from "base_components/RootForm"

import { Root, LabelNoticeBoard, ContainerFormGroups } from "./elements"

const PanelGroupNoticeBoard = ({
  isGroupNoticeboardActive,
  areStudentsCanPostContent,
  areStudentsCanComment,
  onChange
}) => (
  <Root
    title="Group Noticeboard"
    AdditionalTitle={() => (
      <Switch
        value={isGroupNoticeboardActive}
        onChange={e => onChange(e.target.checked, "isGroupNoticeboardActive")}
        name="toggle-all"
      />
    )}
  >
    <ContainerFormGroups>
      <FormGroup isFlex>
        <LabelNoticeBoard>Students can post new content</LabelNoticeBoard>
        <Switch
          value={areStudentsCanPostContent}
          onChange={e =>
            onChange(e.target.checked, "areStudentsCanPostContent")
          }
          name="post-content"
        />
      </FormGroup>
      <FormGroup isFlex>
        <LabelNoticeBoard>Students can comment</LabelNoticeBoard>
        <Switch
          value={areStudentsCanComment}
          onChange={e => onChange(e.target.checked, "areStudentsCanComment")}
          name="post-comment"
        />
      </FormGroup>
    </ContainerFormGroups>
  </Root>
)

export default PanelGroupNoticeBoard
