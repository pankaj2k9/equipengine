import styled from "styled-components"
import { Panel } from "react-bootstrap"

export const Root = styled.div`
  background-color: #f0f0f0;
`

export const AccessableContainer = styled.div`
  margin-top: 1.4em;

  p,
  li {
    font-size: 14px;
  }

  > header {
    border-bottom: 1px solid #7f7f7f;
    padding-bottom: 0.5em;
    margin-bottom: 1.5em;

    > p {
      margin-bottom: 0;
      color: #000000;
    }
  }

  li {
    margin-bottom: 0.8em;
  }
`

export const StyledPanel = styled(Panel)`
  .panel {
    background: none;
    box-shadow: none;
    border: 0;
    margin-bottom: 0;
  }
  .panel-body {
    font-size: 16px;
    color: #272727;
    padding: 1.2em 6% 3em 6%;
    width: 100%;
  }

  @media screen and (min-width: 748px) {
    .panel-body {
      width: 73%;
      padding: 1.2em 35px 35px 35px;
    }
  }
`
