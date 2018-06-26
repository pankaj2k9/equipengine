import React from 'react'

import Tables, { TableRow } from 'base_components/Tables'
import TableRowCourse from './components/TableRowCourse'
import './styles.css'
import userAvatar from 'resources/images/user.png'

const TableCourse = () => {
  const coursesData = [
    {
      id: '548sfjkjk324jksjfkxjkxj',
      date: {
        day: '22 Sep',
        time: '1:00 pm'
      },
      title: 'Becoming Equipped to Communicate',
      lesson: 'Tutorial 1.2',
      person: {
        name: 'Jane Doe',
        avatarURL: userAvatar
      },
      lastAction: <p>Jane <strong>wrote something</strong></p>,
      feedbacks: [
        {
          id: '548sfjkjk324jksjfkxjjgjdfl',
          avatarURL: userAvatar
        },
        {
          id: '548sfjkjk324jksjfkxjjgjjnm',
          name: 'Jane Doe',
          avatarURL: userAvatar
        }
      ],
      isFlagged: false
    },
    {
      id: '548sfjkjk324jksjfkxjkjhg',
      date: {
        day: '28 Sep',
        time: '1:00 pm'
      },
      title: 'Culture and Language',
      lesson: 'Tutorial 1.2',
      person: {
        name: 'Jane Doe',
        avatarURL: userAvatar
      },
      lastAction: <p>Jane <strong>completed a quiz</strong></p>,
      feedbacks: [
        {
          id: '548sfjkjk324jksjfkxjjgjdjnm',
          avatarURL: userAvatar
        }
      ],
      isFlagged: true
    }
  ]

  const tableRowCourses = coursesData.map((course) => (
    <TableRowCourse key={course.id} course={course} />
  ))

  return (
    <Tables>
      <thead>
        <TableRow>
          <th>Time</th>
          <th>Course</th>
          <th>Lesson</th>
          <th>Person</th>
          <th>Last</th>
          <th>Feedback</th>
          <th>Flagged</th>
          <th>Read</th>
        </TableRow>
      </thead>
      <tbody>{tableRowCourses}</tbody>
    </Tables>
  )
}

export default TableCourse
