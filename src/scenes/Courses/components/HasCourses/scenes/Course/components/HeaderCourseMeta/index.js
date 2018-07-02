import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import IconArrowRight from "react-icons/lib/fa/angle-right"
import IconArrowDown from "react-icons/lib/fa/angle-down"

import Box from "base_components/Box"
import CircleProgressBar from "base_components/CircleProgressBar"
import CollapsibleCourseHeaderPanel from "./components/CollapsibleCourseHeaderPanel"
import bgImage from "./course-bg.png"
import courseImg from "resources/images/steve-bible-teaching.jpg"
import "./styles.css"

// Report Container component.
const ReportContainer = styled.div`
  display: flex;
  align-items: center;
`

class HeaderCourseMeta extends PureComponent {
  constructor(...args) {
    super(...args)
    this.state = {
      open: false
    }
  }

  triggerPanel = e => {
    e.preventDefault()
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { title, description } = this.props.course
    return (
      <div>
        <Box
          style={{
            backgroundImage: `url(${bgImage})`
          }}
          className="HeaderCourseMeta"
        >
          <header>
            <div className="course-sm-img">
              <img alt="Course Img" src={courseImg} width="150px" />
            </div>
            <div>
              <h3>{title}</h3>
              <a
                className="HeaderCourseMeta__toggleLink"
                onClick={this.triggerPanel}
              >
                About this course
                <span className="HeaderCourseMeta__button">
                  {this.state.open ? <IconArrowDown /> : <IconArrowRight />}
                </span>
              </a>
            </div>
            <div>
              <ReportContainer>
                <div className="HeaderCourseMeta__completed">
                  <CircleProgressBar
                    strokeWidth={4}
                    percentage={(100 * 2) / 3}
                    text="2 of 3 done"
                    textColor="#fff"
                  />
                </div>
              </ReportContainer>
            </div>
          </header>
        </Box>
        <CollapsibleCourseHeaderPanel
          description={description}
          isOpen={this.state.open}
        />
      </div>
    )
  }
}

HeaderCourseMeta.propTypes = {
  course: PropTypes.object.isRequired
}

export default HeaderCourseMeta
