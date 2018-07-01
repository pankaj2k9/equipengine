import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const Button = ({ style, text, onClick, children, ...rest }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className="Button"
      type="button"
      {...rest}
    >
      {text}
      {children}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.element
}

export default Button
