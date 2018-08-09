import React from "react"
import PropTypes from "prop-types"
import { Tabs as TabBootstrap } from "react-bootstrap"

import "./styles.css"

const Tabs = ({ style, children, className, ...rest }) => {
  return (
    <TabBootstrap
      style={style}
      className={`Tabs ${className}`}
      defaultActiveKey={1}
      {...rest}
    >
      {children}
    </TabBootstrap>
  )
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  style: PropTypes.object,
  className: PropTypes.string
}

Tabs.defaultProps = {
  className: ""
}

export default Tabs
