import React, { Component, Fragment } from "react"
import IconArrowRight from "react-icons/lib/fa/angle-right"
import IconArrowDown from "react-icons/lib/fa/angle-down"

import {
  CourseSmallImage,
  CourseTitle,
  DesktopContainerFlex,
  ExpandLink,
  ExpandIcon
} from "./elements"
import BackgroundImage from "base_components/BackgroundImage"
import CircleProgressBar from "base_components/CircleProgressBar"
import courseImg from "resources/images/course-default.png"
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
        <BackgroundImage>
          <CourseSmallImage alt="Course" src={course.image.url || courseImg} />
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
              percentage={(100 * 0) / course.lessons_count}
              text={`${0} of ${course.lessons_count} done`}
              textColor="#fff"
            />
          </DesktopContainerFlex>
        </BackgroundImage>
        <ExpandableCourseDescription
          description={course.description}
          expanded={this.state.expandDescription}
        />
      </Fragment>
    )
  }
}

export default HeaderCourse
