import React from "react"
import PropTypes from "prop-types"
//
import CompletedCircleBar from "base_components/CompletedCircleBar"
import ExpandableCourseTutorials from "../ExpandableCourseTutorials"
import IconDown from "react-icons/lib/fa/angle-down"
import IconMenu from "react-icons/lib/fa/align-justify"
import IconRight from "react-icons/lib/fa/angle-right"
import { Switch } from "base_components/RootForm"
import withCollapsiblePanel from "hoc/withCollapsiblePanel"
import {
  Body,
  ButtonPanel,
  SpanIcon,
  ContainerInfoCourse,
  Header,
  MenuButton,
  Root,
  Subtitle,
  SwitchForm,
  Title
} from "./elements"

const CourseListItem = ({
  isOpenPanel,
  onToggle,
  onChangeStatus,
  course,
  enabled,
  tutorials
}) => (
  <Root>
    <div>
      <ContainerInfoCourse>
        <Header>
          <div>
            <Title>{course.title}</Title>
            <Subtitle>{course.description}</Subtitle>
          </div>
          <CompletedCircleBar
            count={course.lessons_count}
            completed={course.completed_lessons}
          />
        </Header>
        <Body>
          <SwitchForm>
            <span>Enable / Disable</span>
            <Switch value={enabled} onChange={onChangeStatus} />
          </SwitchForm>
          {tutorials.length && (
            <ButtonPanel onClick={onToggle}>
              View Lessons
              {isOpenPanel ? (
                <SpanIcon>
                  <IconDown />
                </SpanIcon>
              ) : (
                <SpanIcon>
                  <IconRight />
                </SpanIcon>
              )}
            </ButtonPanel>
          )}
        </Body>
      </ContainerInfoCourse>
      <MenuButton>
        <IconMenu />
      </MenuButton>
    </div>
    <ExpandableCourseTutorials
      isOpenPanel={isOpenPanel}
      tutorials={tutorials}
    />
  </Root>
)

CourseListItem.propTypes = {
  isOpenPanel: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default withCollapsiblePanel(CourseListItem)
