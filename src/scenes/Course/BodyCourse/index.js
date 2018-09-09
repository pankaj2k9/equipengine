import React from "react"
import { compose, withContext, withProps, withStateHandlers } from "recompose"

import Box from "base_components/Box"
import { Mobile, Desktop } from "base_components/Responsive"
import modal from "hoc/modal"

import { contextPropTypes } from "../../CourseThreads/propTypes"
import LatestGroupDiscussions from "../LatestGroupDiscussions"
import TabsCourse from "../TabsCourse"
import ThreadModal from "../../CourseThreads/ThreadModal"

const latestDiscussions = [
  {
    name: "Jane",
    avatarURL:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg",
    task: {
      action: "wrote something in",
      meta: {
        id: "5f44348jjsfn34234dsfajsdfk",
        title: "How does our culture impact decisions made by the government?"
      }
    },
    date: {
      day: "2 Sep",
      time: "1:00pm"
    }
  },
  {
    name: "Jon",
    avatarURL: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
    task: {
      action: "created a new discussion thread",
      meta: {
        id: "5f44348jjsfn34234dsffhgns",
        title: "Western Sydney Phrases"
      }
    },
    date: {
      day: "2 Sep",
      time: "1:00pm"
    }
  }
]

const BodyCourse = ({ course, isOpen, onClose, thread }) => {
  return (
    <div>
      {/* this is the layout for 0-767px width */}
      <Mobile>
        <Box>
          <TabsCourse course={course} />
          <LatestGroupDiscussions />
        </Box>
      </Mobile>

      {/* this is the layout for 767px and up width */}
      <Desktop>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <TabsCourse
            course={course}
            style={{
              width: "60%"
            }}
          />
          <LatestGroupDiscussions />
        </Box>
      </Desktop>

      <ThreadModal isOpen={isOpen} onClose={onClose} thread={thread} />
    </div>
  )
}

export default modal(
  compose(
    withProps({ latestDiscussions }),
    withStateHandlers(
      () => ({
        thread: {}
      }),
      {
        selectThread: (_, { discussions, onOpen }) => id => {
          onOpen()

          return {
            thread: discussions.find(thread => thread.id === id)
          }
        }
      }
    ),
    withContext(
      contextPropTypes,
      ({ latestDiscussions, selectThread, thread }) => ({
        latestDiscussions,
        selectThread,
        thread
      })
    )
  )(BodyCourse)
)
