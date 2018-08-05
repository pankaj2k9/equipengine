import styled from "styled-components"
import React from "react"
import { getContext } from "recompose"

import ListDiscussion from "./components/ListDiscussion"
import { contextPropTypes } from "../propTypes"

const LatestGroupDiscussions = styled(
  ({ className, latestDiscussions, selectThread }) => (
    <div className={className}>
      <header>Latest Group Discussions</header>
      <ListDiscussion discussions={latestDiscussions} onSelect={selectThread} />
    </div>
  )
)`
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

export default getContext(contextPropTypes)(LatestGroupDiscussions)
