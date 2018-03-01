import React from 'react'

import PanelReport from '../PanelReport'
import ListReport from '../ListReport'

const ReportLatestGroupActivity = () => (
  <PanelReport title='Latest Group Activiy'>
    <ListReport
      reports={[
        {
          id: 'jhmmasdfl',
          date: {
            date: '22 Sep',
            time: '2:00am'
          },
          description:
            'Jill Mane commented on Tutorial 1.3: Becoming Equipped to Communicate'
        },
        {
          id: 'jsladfj3j4l',
          date: {
            date: '22 Sep',
            time: '2:00am'
          },
          description:
            'Jon Mcall commented on Tutorial 1.1: Communication and Culture'
        }
      ]}
    />
  </PanelReport>
)

export default ReportLatestGroupActivity
