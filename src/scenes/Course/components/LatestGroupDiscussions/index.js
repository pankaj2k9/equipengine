import React from "react"
import styled from "styled-components"

import ListDiscussion from "./components/ListDiscussion"

const LatestGroupDiscussions = styled(({ className, latestDicussions }) => {
  return (
    <div className={className}>
      <header>Latest Group Discussions</header>
      <ListDiscussion discussions={latestDicussions} />
    </div>
  )
})`
  > header {
    border-bottom: 1px solid #dadada;
    padding-bottom: 0.67em;
    margin: 1.8em 0 1.3em 0;
    color: #000000;
  }
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`

export default LatestGroupDiscussions
