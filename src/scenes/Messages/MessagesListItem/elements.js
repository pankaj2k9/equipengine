import styled from "styled-components"

import UserAvatar from "base_components/UserAvatar"

export const Root = styled.li`
  display: flex;
  padding: 0 1.3em;
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 1.6em;
  border-bottom: 1px solid #dbdbdb;
`

export const Content = styled.div`
  margin-right: 2em;
`

export const Avatar = styled(UserAvatar)`
  margin-bottom: 0.8em;
  width: 41px;
  height: 41px;
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
