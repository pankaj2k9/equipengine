import React from "react"
//
import BorderedTitle from "base_components/BorderedTitle"
import SearchActionBar from "../SearchActionBar"
import TableVideos from "../TableVideos"

const Videos = () => (
  <div>
    <BorderedTitle title="Videos" />
    <SearchActionBar
      searchbarInfo={{
        placeholder: "Search videos"
      }}
    />
    <TableVideos />
  </div>
)

export default Videos
