import styled from "styled-components"
import ContainerFlex from "base_components/ContainerFlex"

const Wrapper = styled(ContainerFlex)`
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export default Wrapper
