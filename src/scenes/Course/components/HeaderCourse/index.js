import React, { Component, Fragment } from "react"
import IconArrowRight from "react-icons/lib/fa/angle-right"
import IconArrowDown from "react-icons/lib/fa/angle-down"

import {
  CourseSmallImage,
  CourseTitle,
  DesktopContainerFlex,
  ExpandLink,
  ExpandIcon,
  Root
} from "./elements"
import CircleProgressBar from "base_components/CircleProgressBar"
import courseImg from "resources/images/steve-bible-teaching.jpg"
import ExpandableCourseDescription from "../ExpandableCourseDescription"

class HeaderCourse extends Component {
  state = {
    expandDescription: false
  }

  handleExpandClick = event => {
    event.preventDefault()
    this.setState({
      expandDescription: !this.state.expandDescription
    })
  }

  render() {
    const { course } = this.props
    return (
      <Fragment>
        <Root>
          <CourseSmallImage alt="Course" src={courseImg} />
          {/* Mobile non-flex and Desktop flex container */}
          <DesktopContainerFlex>
            {/* Course title and description link */}
            <div>
              <CourseTitle>{course.title}</CourseTitle>
              <ExpandLink onClick={this.handleExpandClick}>
                About this course
                <ExpandIcon>
                  {this.state.expandDescription ? (
                    <IconArrowDown />
                  ) : (
                    <IconArrowRight />
                  )}
                </ExpandIcon>
              </ExpandLink>
            </div>
            {/* Course completed progress circle */}
            <CircleProgressBar
              strokeWidth={4}
              percentage={(100 * 2) / 3}
              text="2 of 3 done"
              textColor="#fff"
            />
          </DesktopContainerFlex>
        </Root>
        <ExpandableCourseDescription
          description={course.description}
          expanded={this.state.expandDescription}
        />
      </Fragment>
    )
  }
}

export default HeaderCourse
