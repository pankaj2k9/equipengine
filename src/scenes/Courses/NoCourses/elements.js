import styled from "styled-components"
import { Link } from "react-router-dom"

export const Root = styled.section`
  text-align: center;
`

export const Title = styled.h3`
  font-size: 1.2rem;
  text-align: centr;
  font-family: "Avenir Next", sans-serif;
  font-weight: 500;
  color: #505050;

  @media screen and (min-width: 768px) {
    margin-top: 2em;
    font-size: 1.5rem;
  }
`

export const InfoContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 13px;
  }
`

export const Icon = styled.img`
  margin-right: 10px;
`

export const StyledLink = styled(Link)`
  color: #0e90e0;
`
