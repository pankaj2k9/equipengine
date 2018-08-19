import React from "react"

import { FormGroup, Switch } from "base_components/RootForm"

import { Root, NoticeBoardLabel, FormContainer } from "./elements"

const GroupNoticeboardControls = ({
  canStudentComment,
  canStudentPost,
  isNoticeboardEnabled,
  onChange
}) => (
  <Root
    title="Group Noticeboard"
    AdditionalTitle={() => (
      <FormGroup isFlex>
        <Switch
          value={isNoticeboardEnabled}
          name="noticeboard_enabled"
          onChange={onChange}
        />
      </FormGroup>
    )}
  >
    <FormContainer>
      <FormGroup isFlex>
        <NoticeBoardLabel>Students can post new content</NoticeBoardLabel>
        <Switch
          value={canStudentPost}
          disabled={!isNoticeboardEnabled}
          name="student_can_post"
          onChange={onChange}
        />
      </FormGroup>

      <FormGroup isFlex>
        <NoticeBoardLabel>Students can comment</NoticeBoardLabel>
        <Switch
          value={canStudentComment}
          disabled={!isNoticeboardEnabled}
          name="student_can_comment"
          onChange={onChange}
        />
      </FormGroup>
    </FormContainer>
  </Root>
)

export default GroupNoticeboardControls
