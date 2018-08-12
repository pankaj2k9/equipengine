import React from "react"
import iconPlayButton from "resources/images/play-button.svg"
import iconExam from "resources/images/exam.svg"
import { isNil } from "ramda"
import styled from "styled-components"

const Image = styled.img`
  margin-right: 1em;
`

const Text = styled.p`
  margin-bottom: 0;
`

const TutorialTitle = ({ tutorial }) => (
  <React.Fragment>
    {tutorial.type === "video" ? (
      <Image src={iconPlayButton} alt="Play button icon" />
    ) : (
      <Image src={iconExam} alt="Exam icon" />
    )}
    <div>
      <Text>{tutorial.title}</Text>
      {!isNil(tutorial.video) ? <Text>{tutorial.video.length}</Text> : <p />}
    </div>
  </React.Fragment>
)

export default TutorialTitle
