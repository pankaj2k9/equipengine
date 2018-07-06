import React, { Component } from "react"
import coursesData from "scenes/Courses/coursesData.json"

const subscribingOnCourses = WrappedComponent => {
  class EnhancedCourses extends Component {
    constructor() {
      super()
      this.state = {
        courses: coursesData
      }
    }

    render() {
      return <WrappedComponent {...this.props} courses={this.state.courses} />
    }
  }

  return EnhancedCourses
}

export default subscribingOnCourses
