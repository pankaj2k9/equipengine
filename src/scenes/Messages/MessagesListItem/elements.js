import styled from "styled-components"

import UserAvatar from "base_components/UserAvatar"

export const Root = styled.li`
  display: flex;
  padding: 1.6em 1.3em;
  border-bottom: 1px solid #dadada;
`

export const Container = styled.div`
  margin-right: 1em;
`

export const Avatar = styled(UserAvatar)`
  margin-bottom: 0.8em;
`

export const Time = styled.span`
  color: #7e7e7e;
  font-size: 10px;
  display: block;
  margin-top: 0.3em;
`

export const Text = styled.p`
  font-size: 1rem;
  color: #2d2d2d;
  margin-bottom: 0px;
`
