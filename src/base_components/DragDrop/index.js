import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { not, isNil } from 'ramda'
import reorderItems from './reorderItems'
// components for Drag and drop
import { DragDropContext } from 'react-beautiful-dnd'
import DroppableList from './components/DroppableList'
import DroppableListItem from './components/DroppableListItem'

class DragDrop extends Component {
  constructor (props) {
    super(props) // passing props in super initialized the value of this.props.
    this.state = {
      list: this.props.list
    }
  }

  // this handler is used for re-ordering the items on the list.
  onDragEnd = ({ source, destination }) =>
    not(isNil(destination)) // handle not null or undefined destination
      ? this.setState({
        list: reorderItems(this.state.list, source.index, destination.index)
      })
      : undefined;

  render () {
    const { children } = this.props

    // pass props to a children. we will loop to all given chilren and pass a props.
    const childrenWithProps = Children.map(
      children,
      child => React.cloneElement(child, { list: this.state.list }) // pass the list state
    )

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {childrenWithProps}
      </DragDropContext>
    )
  }
}

DragDrop.propTypes = {
  list: PropTypes.array.isRequired
}

DragDrop.defaultProps = {
  list: []
}

export { DragDrop as default, DroppableList, DroppableListItem }
