import React from "react"
import PropTypes from "prop-types"
//
import BorderedTitle from "base_components/BorderedTitle"
import SearchActionBar from "./components/SearchActionBar"
import TableVideos from "./components/TableVideos"

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

Videos.propTypes = {
  match: PropTypes.object.isRequired
}

export default Videos
