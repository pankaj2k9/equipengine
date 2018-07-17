import React from "react"
import styled from "styled-components"
//
import ActivityMessage from "global/Activities/ActivityMessage"
import ContainerFlex from "base_components/ContainerFlex"
import DateTime from "base_components/DateTime"

const ListItemActivity = ({ className, activity }) => (
  <div className={className}>
    <ContainerFlex isSpaceBetween isAlignCenter>
      <DateTime date={new Date(activity.created_at)} />
      <p>
        <ActivityMessage activity={activity} />
      </p>
    </ContainerFlex>
  </div>
)

export default styled(ListItemActivity)`
  > div {
    margin-top: 1em;
    > div {
      margin-right: 1.8em;
    }
    p {
      color: #4e4e53;
      margin-bottom: 0;
      text-align: inherit;
      font-size: 12px;
      > a {
        color: #2093e9;
        margin-left: 3px;
        font-weight: 400;
      }
    }
  }
`
