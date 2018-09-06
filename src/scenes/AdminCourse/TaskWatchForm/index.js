import React, { Component, Fragment } from "react"
import styled from "styled-components"
//
import { FormGroup, Label, Text, TextArea } from "base_components/RootForm"
import VideoChooser from "base_components/VideoChooser"

const VideoFrame = styled.div`
  iframe {
    width: fill-available;
  }
`

class TaskWatchForm extends Component {
  handleDescriptionChange = ({ target: { value } }) => {
    this.props.onChange({ ...this.props.task, description: value })
  }

  handleVideoTitleChange = ({ target: { value } }) => {
    this.props.onChange({
      ...this.props.task,
      video_title: value
    })
  }

  handleVideoLinkChange = ({ target: { value } }) => {
    this.props.onChange({
      ...this.props.task,
      video_link: value,
      video: null
    })
  }

  handleVideoChange = file => {
    this.props.onChange({
      ...this.props.task,
      video: file,
      video_link: null
    })
  }

  render() {
    const { task } = this.props
    return (
      <Fragment>
        <FormGroup>
          <Label>Description &#42;</Label>
          <TextArea
            value={task.description}
            placeholder="Type description..."
            onChange={this.handleDescriptionChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>New video title</Label>
          <FormGroup>
            <Text
              value={task.video_title}
              placeholder="My awesome video"
              onChange={this.handleVideoTitleChange}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>Paste new video link</Label>
          <FormGroup>
            <Text
              value={task.video_link}
              placeholder="https://www.youtube.com/watch?v=VeBOJ0bAI6Q"
              onChange={this.handleVideoLinkChange}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>Or upload new video</Label>
          <VideoChooser video={task.video} onChoose={this.handleVideoChange} />
        </FormGroup>
        {/* Read-only already saved videos */}
        {Array.isArray(task.videos) &&
          task.videos.length > 0 && (
            <React.Fragment>
              <h4>Saved videos</h4>
              {task.videos.map(video => (
                <FormGroup>
                  <Label>{video.title}</Label>
                  <VideoFrame
                    dangerouslySetInnerHTML={{ __html: video.embed_code }}
                  />
                </FormGroup>
              ))}
            </React.Fragment>
          )}
      </Fragment>
    )
  }
}

export default TaskWatchForm
