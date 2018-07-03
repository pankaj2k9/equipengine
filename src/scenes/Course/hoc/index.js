import React, { Component } from "react"
import coursesData from "scenes/Courses/coursesData.json"
import dicussionsData from "../discussionsData.json"

// TODO Delete this file and get data from the same redux store as courses
const subscribingOnCourses = WrappedComponent => {
  class EnhancedCourses extends Component {
    constructor() {
      super()
      this.state = {
        courses: coursesData,
        latestDicussions: dicussionsData
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          courses={this.state.courses}
          latestDicussions={this.state.latestDicussions}
        />
      )
    }
  }

  return EnhancedCourses
}

export default subscribingOnCourses
