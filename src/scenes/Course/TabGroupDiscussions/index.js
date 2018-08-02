import React, { Component } from "react"

import modal from "hoc/modal"
import userURL from "resources/images/user.png"

import TableDiscussions from "../TableDiscussions"
import Thread from "../Thread"
import ThreadModal from "../ThreadModal"

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

class TabGroupDiscussions extends Component {
  state = {
    thread: {}
  }

  onSelect = id => {
    const { onOpen } = this.props

    this.setState(
      {
        thread: discussions.find(item => item.id === id)
      },
      () => {
        onOpen()
      }
    )
  }

  render() {
    const { isOpen, onClose } = this.props
    const { thread } = this.state

    return (
      <div>
        <Thread />

        <TableDiscussions discussions={discussions} onSelect={this.onSelect} />

        <ThreadModal isOpen={isOpen} onClose={onClose} thread={thread} />
      </div>
    )
  }
}

export default modal(TabGroupDiscussions)
