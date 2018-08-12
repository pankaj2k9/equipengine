import React, { Fragment } from "react"

import { Answer, Answers, Checkbox, Label, Question } from "./elements"

const QuizQuestion = ({ isFinished, question }) => (
  <Fragment>
    <Question>{question.name}</Question>

    <Label>Select the correct answer</Label>
    <Answers>
      {question.answers.map(answer => (
        <Answer key={answer.id}>
          <Checkbox
            disabled={isFinished}
            id={answer.id}
            name={answer.value}
            secondary
          />{" "}
          {answer.name}
        </Answer>
      ))}
    </Answers>
  </Fragment>
)

export default QuizQuestion
