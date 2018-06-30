import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import Button from "base_components/RootButton"

const navigate = (history, to) => history.push(to)

const Link = ({ children, to, history }) => (
  <Button onClick={() => navigate(history, to)}>{children}</Button>
)
Link.propTypes = {
  to: PropTypes.string.isRequired
}

export default withRouter(Link)
