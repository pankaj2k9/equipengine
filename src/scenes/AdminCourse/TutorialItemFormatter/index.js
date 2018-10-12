import React from "react"
import IconMenu from "react-icons/lib/md/dehaze"
import IconClose from "react-icons/lib/md/close"

import {
  ACTIVE_TUTORIAL_STATUS,
  PAUSE_TUTORIAL_STATUS
} from "services/constants"
import ContainerFlex from "base_components/ContainerFlex"
import { Switch } from "base_components/RootForm"
import { Root, DeleteIcon, DndIcon, StyledForm } from "./elements"
import TutorialTitle from "global/TutorialTitle"
import Loading from "base_components/Loading"

const TutorialItemFormatter = ({
  tutorial,
  onUpdateTutorialStatus,
  onDeleteTutorial,
  isUpdatingTutorial,
  updatingTutorialId,
  isDeletingTutorial,
  deletingTutorialId
}) => (
  <Root isAlignCenter isSpaceBetween>
    <ContainerFlex isAlignCenter isSpaceBetween>
      <DndIcon>
        <IconMenu />
      </DndIcon>
      <TutorialTitle tutorial={tutorial} />
    </ContainerFlex>
    <ContainerFlex>
      <StyledForm>
        <Switch
          value={tutorial.status === ACTIVE_TUTORIAL_STATUS}
          disabled={isUpdatingTutorial && updatingTutorialId === tutorial.id}
          onChange={e => {
            const status = e.target.checked
              ? ACTIVE_TUTORIAL_STATUS
              : PAUSE_TUTORIAL_STATUS
            onUpdateTutorialStatus({ status, tutorialId: tutorial.id })
            e.stopPropagation()
          }}
        />
        {isDeletingTutorial && deletingTutorialId === tutorial.id ? (
          <Loading />
        ) : (
          <DeleteIcon
            onClick={() => onDeleteTutorial({ tutorialId: tutorial.id })}
          >
            <IconClose />
          </DeleteIcon>
        )}
      </StyledForm>
    </ContainerFlex>
  </Root>
)

export default TutorialItemFormatter
