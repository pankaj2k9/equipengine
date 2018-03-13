import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Draggable} from 'react-beautiful-dnd'

const DroppableListItem = ({
  draggableId,
  index,
  type,
  children,
  colorState: {isDragColor, notDragColor},
  inlineStyle
}) => (
  <Draggable
    draggableId={draggableId}
    type={type}
    index={index}
    key={draggableId}
  >
    {(provided, snapshot) => {
      // extending the DraggableStyle with our own inline styles
      const style = {
        backgroundColor: snapshot.isDragging ? isDragColor : notDragColor,
        ...inlineStyle,
        ...provided.draggableProps.style
      }
      return (
        <Fragment>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={style}
          >
            {children}
          </div>
          {provided.placeholder}
        </Fragment>
      )
    }}
  </Draggable>
)

DroppableListItem.propTypes = {
  draggableId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.element,
  inlineStyle: PropTypes.object,
  colorState: PropTypes.shape({
    isDragColor: PropTypes.string,
    notDragColor: PropTypes.string
  }).isRequired
}

DroppableListItem.defaultProps = {
  type: 'DEFAULT',

  colorState: {
    isDragColor: '#e9f2fc',
    notDragColor: '#FFFFFF'
  }
}

export default DroppableListItem
