import styled from "styled-components"
import IconArrowRight from "react-icons/lib/fa/angle-right"
import IconArrowDown from "react-icons/lib/fa/angle-down"

export const Root = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const Subtitle = styled.p`
  color: ${props => props.theme.gray};
  margin-bottom: 0.8em;
`

export const Title = styled.p`
  font-size: 16px;
  color: ${props => props.theme.black};
  margin-bottom: 0px;
  max-width: 600px;
  transition: all 300ms ease-in;
  &:hover {
    color: ${props => props.theme.primary};
  }
`

export const ExpandIcon = styled(IconArrowDown)`
  font-size: 1.2rem;
  color: ${props => props.theme.darkgray};
`

export const CollapseIcon = styled(IconArrowRight)`
  font-size: 1.2rem;
  color: ${props => props.theme.darkgray};
`
