import React from "react"
import styled from "styled-components"
import IconSettings from "react-icons/lib/fa/cog"
import Popover from "base_components/Popover"
import Button from "base_components/RootButton"

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const TutorialTaskSettings = () => (
  <Popover
    buttonIcon={<IconSettings />}
    popoverContentElement={
      <Content>
        <Button light>Save PDF</Button>
        <Button light>Print</Button>
      </Content>
    }
  />
)

export default TutorialTaskSettings
