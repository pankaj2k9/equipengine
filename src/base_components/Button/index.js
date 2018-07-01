import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const Button = ({ style, text, handleClick, onClick, children }) => {
  return (
    <button
      style={style}
      onClick={handleClick || onClick}
      className="Button"
      type="button"
    >
      {text}
      {children}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.element
}

export default Button
