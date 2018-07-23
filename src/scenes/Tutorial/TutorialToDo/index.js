import React from "react"

import assignmentSrc from "resources/images/assignment.svg"
import Box from "base_components/Box"
import CheckboxRound from "base_components/CheckboxRound"
import questionsSrc from "resources/images/question.svg"
import quizSrc from "resources/images/quiz.svg"
import mediaSrc from "resources/images/media.svg"
import TutorialToDoItem from "../TutorialToDoItem"
import { CompleteContainer, CompleteLabel, Headline, List } from "./elements"
import {
  TASK_TYPE_QUESTION,
  TASK_TYPE_QUIZ,
  TASK_TYPE_READING
} from "services/API"

const toCounters = tasks => {
  const counters = {
    questionsCount: 0,
    assignmentCount: 0,
    mediaCount: 0,
    quizCount: 0
  }
  if (Array.isArray(tasks)) {
    tasks.forEach(task => {
      switch (task.action_type) {
        case TASK_TYPE_QUESTION: {
          counters.questionsCount++
          break
        }
        case TASK_TYPE_READING: {
          counters.assignmentCount++
          break
        }
        case TASK_TYPE_QUIZ: {
          counters.quizCount++
          break
        }
        default: {
          break
        }
      }
      if (Array.isArray(task.videos)) {
        counters.mediaCount += task.videos.length
      }
    })
  }
  return counters
}

const TutorialToDo = ({ completed, tasks, onChangeCompleted }) => {
  const { assignmentCount, questionsCount, quizCount, mediaCount } = toCounters(
    tasks
  )
  return (
    <Box>
      <header>
        <Headline>Things to do</Headline>
      </header>
      <List>
        <TutorialToDoItem
          count={questionsCount}
          label="Questions"
          icon={questionsSrc}
        />
        <TutorialToDoItem
          count={assignmentCount}
          label="Assignment"
          icon={assignmentSrc}
        />
        <TutorialToDoItem count={mediaCount} label="Media" icon={mediaSrc} />
        <TutorialToDoItem count={quizCount} label="Quiz" icon={quizSrc} />
      </List>
      <CompleteContainer>
        <CheckboxRound value={completed} onChange={onChangeCompleted} />
        <CompleteLabel>Mark as complete</CompleteLabel>
      </CompleteContainer>
    </Box>
  )
}

export default TutorialToDo
