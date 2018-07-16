import styled from "styled-components"

export const Header = styled.header`
  border-bottom: 1px solid #dadada;
  padding: 0.8em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #adadad;
  margin-right: 0.5em;
`

export const Icon = styled.span`
  margin-bottom: 0.4em;
`

export const ListRoot = styled.ul`
  @media screen and (max-width: 767px) {
    height: 155px;
    overflow-y: auto;
  }
`
