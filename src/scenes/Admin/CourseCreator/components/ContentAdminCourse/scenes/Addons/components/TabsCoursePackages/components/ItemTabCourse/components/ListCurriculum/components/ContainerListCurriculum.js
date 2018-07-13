import styled from "styled-components"

const ContainerListCurriculum = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export default ContainerListCurriculum
