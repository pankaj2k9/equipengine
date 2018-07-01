import styled from "styled-components"
import ThWithSort from "./ThWithSort"

const Th = styled.th`
  text-align: ${props => props.center && "center"};
`

export { Th as default, ThWithSort }
