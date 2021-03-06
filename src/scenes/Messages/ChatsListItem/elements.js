import styled from "styled-components"

import UserAvatar from "base_components/UserAvatar"

export const Anchor = styled.ul`
  display: flex;
  padding: 1.3em;
  background: ${props => props.isActive && "rgba(186, 186, 186, 0.21)"};
  transition: background 300ms ease-in;

  &:hover {
    background: rgba(186, 186, 186, 0.21);
  }
`

export const Avatar = styled(UserAvatar)`
  margin-right: 1em;
`

export const Container = styled.div`
  flex: 1;
  font-size: 13px;
  color: #2d2d2d;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Message = styled.ul`
  padding-right: 4em;
  margin-top: 0.2em;
`
