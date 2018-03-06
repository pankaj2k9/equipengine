import styled from 'styled-components'

export default styled.td`
  text-align: ${(props) => props.center && 'center'};
  vertical-align: middle;
  color: #111111;
  border: 0;
  &:last-child {
    text-align: right;
  }
`
