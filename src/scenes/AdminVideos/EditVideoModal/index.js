import React, { Component } from "react"
import PropTypes from "prop-types"

import EntityModal from "base_components/EntityModal"
import Loading from "base_components/Loading"
import VideoForm from "../VideoForm"

class EditVideoModal extends Component {
  state = {
    id: null,
    title: null,
    file: null
  }

  componentDidUpdate(prevProps, prevState) {
    const { video } = this.props
    if (!video && prevState.id) {
      this.setState({
        id: null,
        title: null,
        file: null
      })
    }
    if (video && prevState.id !== video.id) {
      this.setState({
        id: video.id,
        title: video.title,
        file: video.file
      })
    }
  }

  handleChange = (value, name) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { id, title, file } = this.state
    this.props.onClose()
    this.props.onSubmit({ id, title, file })
  }

  render() {
    const { video, isOpen, isSubmitting, onClose } = this.props
    const { title, file } = this.state

    return (
      <EntityModal
        title="Edit video"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={this.handleSubmit}
      >
        {isSubmitting ? (
          <Loading />
        ) : (
          <VideoForm
            embedCode={video && video.embed_code}
            fields={{ title, file }}
            onChange={this.handleChange}
          />
        )}
      </EntityModal>
    )
  }
}

EditVideoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default EditVideoModal
