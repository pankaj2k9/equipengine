import styled from "styled-components"

export const Header = styled.header`
  border-bottom: 1px solid #dadada;
  padding: 0.8em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const ListRoot = styled.ul`
  @media screen and (max-width: 767px) {
    height: 155px;
    overflow-y: auto;
  }
`
