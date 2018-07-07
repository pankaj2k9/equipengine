import styled from "styled-components"
import Box from "base_components/Box"

export const Root = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.lightgray};
  flex-direction: column;
`

export const Headline = styled.h3`
  color: ${props => props.theme.black};
  font-size: 1.2rem;
  font-weight: 800;
  margin: 15px 0px 15px;
`
