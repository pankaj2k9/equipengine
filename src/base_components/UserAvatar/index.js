import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const size = props => {
  switch (props.size) {
    case "small":
      return "25px"
    case "large":
      return "42px"
    default:
      return "30px"
  }
}

const UserAvatar = styled(({ image, className }) => (
  <img
    className={className}
    src={image || "http://www.gravatar.com/avatar?d=mp"}
    alt="Avatar"
  />
))`
  height: ${size};
  width: ${size};
  border-radius: 50%;
  object-position: top;
  object-fit: cover;
`

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired
}

export default UserAvatar
