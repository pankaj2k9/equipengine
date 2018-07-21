import React from "react"

import assignmentSrc from "resources/images/assignment.svg"
import Box from "base_components/Box"
import CheckboxRound from "base_components/CheckboxRound"
import questionsSrc from "resources/images/question.svg"
import quizSrc from "resources/images/quiz.svg"
import mediaSrc from "resources/images/media.svg"
import TutorialToDoItem from "../TutorialToDoItem"
import { CompleteContainer, CompleteLabel, Headline, List } from "./elements"

const TutorialToDo = ({ completed, onChangeCompleted }) => (
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
    <CompleteContainer>
      <CheckboxRound value={completed} onChange={onChangeCompleted} />
      <CompleteLabel>Mark as complete</CompleteLabel>
    </CompleteContainer>
  </Box>
)

export default TutorialToDo
