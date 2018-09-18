import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
//
import ActionBar from "../ActionBar"
import CoursesContainer from "scenes/AdminCoursesContainer"
import BorderedTitle from "base_components/BorderedTitle"
import features from "features"
import {
  createOrganizationVideo,
  fetchOrganizationVideos,
  updateOrganizationVideo
} from "../thunks"
import { selectors } from "../selectors"
import TableVideos from "../TableVideos"
import { toastAction } from "global/Toast"
import { types } from "../ducks"
import Loading from "base_components/Loading"

class Videos extends Component {
  componentDidMount() {
    this.props.fetchVideos({ organizationId: this.props.organizationId })
  }

  handleCreateVideo = ({ file, title }) => {
    this.props
      .createVideo({
        organizationId: this.props.organizationId,
        file,
        title
      })
      .then(action =>
        toastAction({
          action,
          errorType: types.CREATE_ORGANIZATION_VIDEO_ERROR,
          success: `Video ${title} is successfully created`,
          error: `Failed to create video ${title}`
        })
      )
  }

  handleUpdateVideo = ({ id, file, title }) => {
    this.props
      .updateVideo({
        id,
        organizationId: this.props.organizationId,
        file,
        title
      })
      .then(action =>
        toastAction({
          action,
          errorType: types.UPDATE_ORGANIZATION_VIDEO_ERROR,
          success: `Video ${title} is successfully updated`,
          error: `Failed to update video ${title}`
        })
      )
  }

  render() {
    const {
      isFetchingVideos,
      isCreatingVideo,
      isUpdatingVideo,
      videos
    } = this.props
    return (
      <CoursesContainer>
        <BorderedTitle title="Videos" />
        <ActionBar
          searchbarInfo={{
            placeholder: "Search videos"
          }}
          onCreate={this.handleCreateVideo}
        />
        {isFetchingVideos || isCreatingVideo || isUpdatingVideo ? (
          <Loading />
        ) : (
          <TableVideos videos={videos} onUpdate={this.handleUpdateVideo} />
        )}
      </CoursesContainer>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    videos: selectors.selectVideos(),
    isFetchingVideos: selectors.selectIsFetchingVideos(),
    isCreatingVideo: selectors.selectIsCreatingVideo(),
    isUpdatingVideo: selectors.selectIsUpdatingVideo(),
    organizationId: features.login.selectors.selectCurrentUserOrganizationId()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createVideo: createOrganizationVideo,
      fetchVideos: fetchOrganizationVideos,
      updateVideo: updateOrganizationVideo
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(Videos)
