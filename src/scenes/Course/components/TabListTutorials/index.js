import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { isNil } from "ramda"

import {
  StyledListRow,
  StyledListRowLeft,
  StyledListRowRight,
  ViewButton
} from "./elenents"
import List from "base_components/List"
import iconPlayButton from "./play-button.svg"
import iconExam from "./exam.svg"

const TabListTutorials = ({ tutorials, match }) => {
  const listOfTutorials = tutorials.map(tutorial => (
    <StyledListRow key={tutorial.tutorialId}>
      <StyledListRowLeft>
        {tutorial.type === "video" ? (
          <img src={iconPlayButton} alt="Play button icon" />
        ) : (
          <img src={iconExam} alt="Exam icon" />
        )}
        <div>
          <p>{tutorial.title}</p>
          {!isNil(tutorial.video) ? <p>{tutorial.video.length}</p> : <p />}
        </div>
      </StyledListRowLeft>
      <StyledListRowRight>
        <ViewButton text="View" url={`${match.url}/tutorials/${tutorial.id}`} />
      </StyledListRowRight>
    </StyledListRow>
  ))

  return <List>{listOfTutorials}</List>
}

TabListTutorials.propTypes = {
  tutorials: PropTypes.array.isRequired
}

export default withRouter(TabListTutorials)
