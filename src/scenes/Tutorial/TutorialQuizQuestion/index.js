import React, { Fragment } from "react"

import { Question } from "./elements"

const TutorialQuizQuestion = ({ question }) => (
  <Fragment>
    <Question>{question.question}</Question>
  </Fragment>
)

export default TutorialQuizQuestion
