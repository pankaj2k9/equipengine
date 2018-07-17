import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { isEmpty, isNil } from "ramda"

import {
  StyledList,
  StyledListRowLeft,
  StyledListRowRight,
  ViewButton
} from "./elements"
import Box from "base_components/Box"
import courseImg from "resources/images/course-img.png"
import { ListRow } from "base_components/List"
import NoCourses from "../NoCourses"
import TutorialsCompleted from "../TutorialsCompleted"

const ListCourses = ({ courses, match }) => {
  if (isEmpty(courses) || isNil(courses)) {
    return <NoCourses />
  }

  return (
    <Box>
      <StyledList>
        {courses.map(course => (
          <ListRow key={course.courseId}>
            {/* Course default image */}
            <div>
              <img
                alt="Course Img"
                src={course.image.url || courseImg}
                width="150px"
              />
            </div>
            {/* Course title */}
            <StyledListRowLeft>
              <p>{course.title}</p>
              <p>{course.description}</p>
            </StyledListRowLeft>
            {/* Link to course and completed circle */}
            <StyledListRowRight>
              <div>
                <TutorialsCompleted
                  count={course.lessons_count}
                  completed={0}
                />
                <ViewButton text="View" url={`${match.url}/${course.id}`} />
              </div>
            </StyledListRowRight>
          </ListRow>
        ))}
      </StyledList>
    </Box>
  )
}

ListCourses.propTypes = {
  courses: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}

ListCourses.defaultProps = {
  courses: []
}

export default styled(ListCourses)`
  margin-top: 27px;

  &__item-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__link {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    &__item-left {
      margin: 0 10px;
    }

    &__item-right {
      display: block;
    }
  }
`
