import { Panel } from "react-bootstrap"
import styled from "styled-components"

export const ExpandPanel = styled(Panel)`
  border-top: 0;

  .panel-collapse {
    border-top: 1px solid ${props => props.theme.lightgray};
  }
`
