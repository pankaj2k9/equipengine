import React from "react"
import PropTypes from "prop-types"
import Breadcrumbs from "base_components/Breadcrumbs"
import { split, join, pipe } from "ramda"

import HeaderCourse from "./components/HeaderCourse"
import BodyCourse from "./components/BodyCourse"
import subscribingOnCourses from "./hoc"

const Course = ({ match, courses, latestDicussions }) => {
  // cachce variables
  const paramId = match.params.id
  /* create the course title based on the url params*/
  const courseTitle = pipe(
    split("-"),
    join(" ")
  )(paramId)
  // retrieve specific course based on the params id value
  const course = courses.filter(course => course.id === paramId)[0]
  return (
    <div>
      {/* Breadcrubms with links to courses */}
      <Breadcrumbs
        items={[
          {
            to: "/secure/courses",
            label: "Courses"
          },
          {
            to: match.url,
            label: courseTitle
          }
        ]}
      />

      {/* Image with name and completed circle */}
      <HeaderCourse course={course} />

      {/* Tutorials, files and dicsussions */}
      <BodyCourse course={course} latestDicussions={latestDicussions} />
    </div>
  )
}

Course.propTypes = {
  courses: PropTypes.array,
  match: PropTypes.object.isRequired
}

export default subscribingOnCourses(Course)
