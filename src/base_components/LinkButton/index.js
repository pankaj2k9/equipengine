import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
//
import Button from "base_components/RootButton"

const LinkButton = ({ text, url, disabled, children, ...rest }) => {
  if (disabled) {
    return (
      <Button disabled={disabled} {...rest}>
        {text}
        {children}
      </Button>
    )
  }
  return (
    <Link to={url} {...rest}>
      <Button {...rest}>
        {text}
        {children}
      </Button>
    </Link>
  )
}

LinkButton.propTypes = {
  url: PropTypes.string.isRequired
}

export default LinkButton
