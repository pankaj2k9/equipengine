import React from "react"
import { Link } from "react-router-dom"

export const COMMENT_ACTIVITY_TYPE = "Comment"
export const CHAT_ACTIVITY_TYPE = "ChatMessage"

const ActivityMessage = ({ activity }) => {
  const { eventable_type } = activity
  if (!eventable_type) {
    return "Unknown action occured"
  }
  if (eventable_type === COMMENT_ACTIVITY_TYPE) {
    const { user, course, lesson } = activity
    return (
      <React.Fragment>
        {user.first_name} {user.last_name} commented on{" "}
        <Link to={`/secure/courses/${course.id}`}>
          {lesson.title}: {course.title}
        </Link>
      </React.Fragment>
    )
  }
  if (eventable_type === CHAT_ACTIVITY_TYPE) {
    const message = activity.eventable ? activity.eventable.message : ""
    const { user } = activity.message.as_object.variables
    // TODO improve API to return first_name and last_name
    const name = user.substring(user.indexOf(">") + 1, user.lastIndexOf("<"))
    return (
      <React.Fragment>
        {name} sent message starting with "{message.substring(0, 10)}..." on<Link to="/secure/messages">
          Chat
        </Link>
      </React.Fragment>
    )
  }
  return eventable_type
}

export default ActivityMessage
