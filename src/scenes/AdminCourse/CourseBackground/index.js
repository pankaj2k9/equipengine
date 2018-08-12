import React, { Fragment } from "react"
import styled from "styled-components"
//
import CourseSettingsModal from "global/CourseSettingsModal"
import IconSettings from "react-icons/lib/fa/cog"
import BackgroundImage from "base_components/BackgroundImage"
import courseImg from "resources/images/course-default.png"
import modal from "hoc/modal"
import { OutlineButton } from "base_components/RootButton"

const Title = styled.div`
  color: ${props => props.theme.lightgray};
  padding: 5px 0 15px 0;
  font-size: 20px;
`

const CourseBackground = ({ course, onOpen, onClose, isOpen }) => (
  <Fragment>
    <BackgroundImage>
      <img alt="Course Img" src={courseImg} width="150px" />
      <Title>{course && course.title}</Title>
      <OutlineButton color="lightgray" hoverColor="white" onClick={onOpen}>
        <IconSettings /> Settings
      </OutlineButton>
    </BackgroundImage>
    <CourseSettingsModal
      title="Course settings and information"
      submitButtonTitle="Save"
      isOpen={isOpen}
      onClose={onClose}
    />
  </Fragment>
)

export default modal(CourseBackground)
