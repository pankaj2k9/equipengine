import React from "react"

import Box from "base_components/Box"
import CheckboxRound from "base_components/CheckboxRound"
// icon on things to do list
import questionsSrc from "resources/images/question.svg"
import assignmentSrc from "resources/images/assignment.svg"
import mediaSrc from "resources/images/media.svg"
import quizSrc from "resources/images/quiz.svg"

import TutorialToDoItem from "../TutorialToDoItem"
import { CompleteContainer, CompleteLabel, Headline, List } from "./elements"

const TutorialToDo = () => (
  <Box>
    <header>
      <Headline>Things to do</Headline>
    </header>
    <List>
      <TutorialToDoItem text="4 x Questions" icon={questionsSrc} />
      <TutorialToDoItem text="2 x Assignment" icon={assignmentSrc} />
      <TutorialToDoItem text="1 x Media" icon={mediaSrc} />
      <TutorialToDoItem text="1 x Quiz" icon={quizSrc} />
    </List>
    <footer>
      <CompleteContainer>
        <CheckboxRound />
        <CompleteLabel>Mark as complete</CompleteLabel>
      </CompleteContainer>
    </footer>
  </Box>
)

export default TutorialToDo
