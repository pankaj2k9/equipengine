import styled from "styled-components"

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.3em;
  float: left;
  width: 50%;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 0.3em;
  }
`

export const Icon = styled.img`
  margin-right: 0.8em;
  margin-bottom: 0.2em;
`

export const Label = styled.span`
  color: ${props => props.theme.darkgray};
`
