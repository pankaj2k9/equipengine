import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from 'base_components/Box'
import TutorialsCompleted from './components/TutorialsCompleted'
import LinkButton from 'base_components/LinkButton'
import List, { ListRow, ListRowLeft, ListRowRight } from 'base_components/List'
import courseImg from 'resources/images/course-img.png'

import './styles.css'

const ViewButton = styled(LinkButton)`
  width: 100%;
`

const ListCourses = ({ courses, match }) => {
  const listCourses = courses.map((course, i) => {
    return (
      <ListRow key={course.courseId}>
        <div>
          <img alt="Course Img" src={courseImg} width="150px" />
        </div>
        <ListRowLeft>
          <p>{course.title}</p>
          <p>{course.subtitle}</p>
        </ListRowLeft>
        <ListRowRight className='ListCourses__right'>
          <div>
            <TutorialsCompleted />
            <ViewButton text='View' url={`${match.url}/${course.id}`} />
          </div>
        </ListRowRight>
      </ListRow>
    )
  })
  return (
    <Box>
      <List className='ListCourses'>{listCourses}</List>
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

export default ListCourses
