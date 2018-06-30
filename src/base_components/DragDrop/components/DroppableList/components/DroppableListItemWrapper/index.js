import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { identical } from "ramda"

/**
 * We are using this component to block any unnecessary rendering of the Draggable item components.
 */
class DroppableListItemWrapper extends Component {
  shouldComponentUpdate = nextProps =>
    identical(this.props.list, nextProps.list) ? false : true

  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}

DroppableListItemWrapper.propTypes = {
  children: PropTypes.node, // FIXME: We need to change it to appropriate type.
  list: PropTypes.array.isRequired
}

export default DroppableListItemWrapper
