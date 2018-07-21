import styled from "styled-components"

export const Headline = styled.h5`
  margin: 20px 0px 20px;
  font-size: 0.89rem;
  font-weight: 800;
  color: ${props => props.theme.darkgray};
`

export const List = styled.ul`
  margin-bottom: 1.18rem;
  display: flex;
  flex-direction: column;
`

export const CompleteContainer = styled.div`
  margin-bottom: 1.18em;
  display: flex;
  align-items: center;
`

export const CompleteLabel = styled.span`
  margin-left: 0.8em;
  font-size: 12;
  font-weight: 400;
  color: ${props => props.theme.darkgray};
`
