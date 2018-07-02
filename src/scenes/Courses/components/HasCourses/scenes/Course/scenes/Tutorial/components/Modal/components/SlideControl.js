import React from "react"
import PropTypes from "prop-types"

import ModalButton from "./ModalButton"

const SlideControl = ({ text, arrow, onClick }) => (
  <ModalButton style={{ padding: 0 }} onClick={onClick}>
    <span
      style={{
        marginRight: "0.3em"
      }}
    >
      {arrow}
    </span>
    <span>{text}</span>
  </ModalButton>
)

SlideControl.propTypes = {
  text: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SlideControl
