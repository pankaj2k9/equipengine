import BaseForm from "base_components/RootForm"
import styled from "styled-components"

const Form = styled(BaseForm)`
  padding: 0 2%;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 96%;
  }
`

export default Form
