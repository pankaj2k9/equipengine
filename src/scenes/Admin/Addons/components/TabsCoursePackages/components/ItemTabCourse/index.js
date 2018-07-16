import React from "react"
import styled from "styled-components"
//
import Container from "base_components/Container"
import ListCurriculum from "./components/ListCurriculum"

const ItemTabCourse = styled(({ className }) => (
  <Container className={className}>
    <h3>The AccessTruth Curriculum</h3>
    <ListCurriculum />
  </Container>
))`
  flex-direction: column;

  h3 {
    font-weight: 800;
    font-size: 1.2rem;
    margin: 0 0 1em;
  }

  @media screen and (min-width: 768px) {
    padding: 9px 35px;
  }
`

export default ItemTabCourse
