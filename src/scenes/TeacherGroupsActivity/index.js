import React from "react"
import { compose, withContext, withProps, withStateHandlers } from "recompose"

import modal from "hoc/modal"
import userURL from "resources/images/user.png"

import SearchbarTableGroups from "./components/SearchbarTableGroups"
import TableTeacherGroupsActivity from "./components/TableTeacherGroupsActivity"
import ThreadModal from "./components/ThreadModal"
import { contextPropTypes } from "./propTypes"

const discussions = [
  {
    id: "5f44348jjsfn34234dsfajsdfk",
    name: "Jon Mcall",
    title: "How does our culture impact decisions made by the government?",
    activities: [
      {
        name: "Jane Doe",
        action: "created a new discussion thread",
        avatarURL: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
        date: {
          day: "2 Sep",
          time: "1:00pm"
        }
      }
    ],
    date: {
      day: "2 Sep",
      time: "1:00pm"
    },
    comments: [
      {
        id: "5f3fjghds234jewe",
        name: "John Mcall",
        avatarURL: userURL,
        comment:
          "Hi everyone. I’ve been thinking lately about the impact our culture has on government decisions. Does anyone have some good examples? I’ve thought about the way the governement is so stupid lately relates to the way our culture is so stupid. ",
        date: {
          day: "2 Sep",
          time: "1:00pm"
        }
      },
      {
        id: "5f3fjghds234qwer",
        name: "Jane Doe",
        avatarURL: userURL,
        comment:
          "Yes! That is so true. They are both stupid. I never realised before…",
        date: {
          day: "2 Sep",
          time: "1:00pm"
        }
      },
      {
        id: "5fhld3fjasdfds234jsfs",
        name: "John Mcall",
        avatarURL: userURL,
        comment:
          "Hi everyone. I’ve been thinking lately about the impact our culture has on government decisions. Does anyone have some good examples? I’ve thought about the way the governement is so stupid lately relates to the way our culture is so stupid. ",
        date: {
          day: "2 Sep",
          time: "1:00pm"
        }
      },
      {
        id: "5ff3fjghds234isfs",
        name: "Jane Doe",
        avatarURL: userURL,
        comment:
          "Yes! That is so true. They are both stupid. I never realised before…",
        date: {
          day: "2 Sep",
          time: "1:00pm"
        }
      }
    ],
    dateAdded: "22 April 18"
  },
  {
    id: "5f44348jjsfn34234dsffhgns",
    name: "Jon Mcall",
    title: "Western Sydney Phrases",
    activities: [
      {
        name: "Jack Sparrow",
        action: "created a new discussion thread",
        avatarURL: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
        date: {
          day: "1 Sep",
          time: "1:00pm"
        }
      }
    ],
    comments: [
      {
        id: "5f3fjghds234j333",
        name: "John Mcall",
        avatarURL: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
        comment:
          "Hi everyone. I’ve been thinking lately about the impact our culture has on government decisions. Does anyone have some good examples? I’ve thought about the way the governement is so stupid lately relates to the way our culture is so stupid. ",
        date: {
          day: "2 Sep",
          time: "1:00pm"
        }
      },
      {
        id: "5f3fjghds234jsfs",
        name: "Jane Doe",
        avatarURL: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
        comment:
          "Yes! That is so true. They are both stupid. I never realised before…",
        date: {
          day: "2 Sep",
          time: "1:00pm"
        }
      }
    ],
    date: {
      day: "2 Sep",
      time: "1:00pm"
    },
    dateAdded: "22 April 17"
  }
]

const groupActivities = [
  {
    name: "Jane",
    course: "Becoming Equipped to Communicate",
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
    course: "Becoming Equipped to Communicate",
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

const TeacherGroupsActivity = ({
  groupActivities,
  isOpen,
  onClose,
  selectThread,
  thread
}) => (
  <div className="TeacherGroupsActivity">
    <SearchbarTableGroups />

    <TableTeacherGroupsActivity
      activities={groupActivities}
      onSelect={selectThread}
    />

    <ThreadModal isOpen={isOpen} onClose={onClose} thread={thread} />
  </div>
)

export default modal(
  compose(
    withProps({ discussions, groupActivities }),
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
      ({ discussions, groupActivities, selectThread, thread }) => ({
        discussions,
        groupActivities,
        selectThread,
        thread
      })
    )
  )(TeacherGroupsActivity)
)
