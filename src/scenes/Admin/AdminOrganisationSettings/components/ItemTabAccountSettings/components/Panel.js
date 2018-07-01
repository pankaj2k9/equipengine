import styled from "styled-components"
import BasePanel from "base_components/Panel"

const Panel = styled(BasePanel)`
  &:first-child {
    padding-top: 0;
  }

  header {
    margin-bottom: 0.8em;
  }

  @media screen and (min-width: 768px) {
    width: 100%;

    header {
      margin-bottom: 1em;
    }
  }
`

export default Panel
