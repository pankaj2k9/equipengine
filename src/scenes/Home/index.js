import React from "react"
import styled from "styled-components"
//
import HeaderHome from "./components/HeaderHome"
import BodyHome from "./components/BodyHome"

/**
   TODO:
   - Add components to Body.
 */

const ContainerHome = styled.section`
  width: 80%;
  margin: 3em auto;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

const Home = () => (
  <ContainerHome>
    <HeaderHome />
    <BodyHome />
  </ContainerHome>
)

export default Home
