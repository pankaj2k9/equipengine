import styled from 'styled-components';

export default styled.div`
  width: 11px;
  height: 11px;
  background-color: ${props => (props.isActive ? '#2FE330' : '#E82929')};
  border-radius: 50%;
  display: inline-block;
`;
