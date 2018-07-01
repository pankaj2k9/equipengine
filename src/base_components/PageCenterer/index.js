import styled from "styled-components"

export default styled.section`
  margin: ${props => props.margin || 0} auto;
  width: 80%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
