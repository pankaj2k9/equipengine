import styled from "styled-components"
import BaseButton from "base_components/RootButton"

const Button = styled(BaseButton)`
  margin-top: 3em;

  @media screen and (min-width: 768px) {
    margin-bottom: 5em;
  }
`

export default Button
