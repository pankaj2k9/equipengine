import styled from 'styled-components';

const RootButton = styled.button`
  background-color: ${props => (props.secondary ? '#d8d8d8' : '#338ffc')};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  color: ${props => (props.secondary ? '#333333' : '#ffffff')};
  width: 104px;
  border: 0;
  padding: 11px 0;
  font-family: 'karla';
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 3px;
  transition: background-color 300ms ease-in;
  pointer-events: ${props => props.disabled && 'none'};

  &:hover {
    background-color: ${props => (props.secondary ? '#a2a0a0' : '#125eb7')};
    color: ${props => (props.secondary ? '#333333' : '#ffffff')};
  }
`;

export default RootButton;
