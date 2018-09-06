import styled from "styled-components"

import Table from "base_components/Tables"
import UserAvatar from "base_components/UserAvatar"

export const ActivityTable = styled(Table)`
  && thead tr th {
    text-align: center;
    color: #111111;
  }

  && tbody tr td {
    vertical-align: middle;
  }

  && tbody tr td:first-child {
    text-align: center;
  }

  && tbody tr td strong {
    color: #0d90e0;
    font-weight: 400;
  }

  && tbody tr td * {
    text-align: inherit;
    margin-bottom: 0;
    color: #111111;
    position: relative;
  }
`

export const AvatarActivity = UserAvatar.extend`
  margin-right: 1em;
`

export const ContainerActivity = styled.div`
  display: flex;

  p {
    button {
      display: inline;

      padding: 0;
      margin: 0;

      border: none;
      background: transparent;

      color: #2093e9;
      font-weight: bold;
    }
  }
`
