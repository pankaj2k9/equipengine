import React from "react"
import { ButtonToolbar, MenuItem, DropdownButton } from "react-bootstrap"

import VideoBox from "../VideoBox"
import "./styles.css"

const VideosDropdown = ({ currentVideo, videos, onChange }) => (
  <VideoBox>
    <div className="DropdownMediaFile">
      <ButtonToolbar>
        <DropdownButton title="Videos" id="dropdown-size-medium">
          {videos.map(video => (
            <MenuItem
              active={currentVideo && currentVideo.title === video.title}
              onClick={() => onChange({ video })}
            >
              {video.title}
            </MenuItem>
          ))}
        </DropdownButton>
      </ButtonToolbar>
    </div>
  </VideoBox>
)

export default VideosDropdown
