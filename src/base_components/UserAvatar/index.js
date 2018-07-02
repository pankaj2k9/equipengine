import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const UserAvatar = styled(({ image, className }) => (
  <img
    className={className}
    src={image || "http://www.gravatar.com/avatar?d=mp"}
    alt="Avatar"
  />
))`
  height: ${props => (props.small ? "25px" : "30px")};
  width: ${props => (props.small ? "25px" : "30px")};
  border-radius: 50%;
  object-position: top;
  object-fit: cover;
`

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired
}

export default UserAvatar
