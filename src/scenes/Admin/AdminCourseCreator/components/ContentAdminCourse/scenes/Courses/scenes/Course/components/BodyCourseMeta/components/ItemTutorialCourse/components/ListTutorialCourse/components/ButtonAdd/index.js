import ButtonAddBase from "base_components/ButtonAdd"
import styled from "styled-components"

const ButtonAdd = styled(ButtonAddBase)`
  background-color: #0e90e0;
  border: none;
  color: #ffffff;
  padding-top: 0;
  padding-bottom: 0;
  height: 34px;
  display: inline-flex;
  align-items: center;
  width: 153px;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;

  i {
    font-size: 21px;
    margin-top: -2px;
  }
`

export default ButtonAdd
