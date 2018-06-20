import React from 'react'

import PanelReport from '../PanelReport'
import ListReport from '../ListReport'

// for latest feedback
const ReportLatestFeedback = () => (
  <PanelReport title='Your Latest Feedback'>
    <ListReport
      reports={[
        {
          id: 'jhmmasdfl',
          date: {
            date: '22 Sep',
            time: '2:00am'
          },
          description:
            <p>Jill Mane commented on <a href="javascript:;">Tutorial 1.3: Becoming Equipped to Communicate</a></p>
        },
        {
          id: 'jsladfj3j4l',
          date: {
            date: '22 Sep',
            time: '2:00am'
          },
          description:
          <p>Jon Mcall commented on <a href="javascript:;">Tutorial 1.1: Communication and Culture</a></p>
        }
      ]}
    />
  </PanelReport>
)

export default ReportLatestFeedback
