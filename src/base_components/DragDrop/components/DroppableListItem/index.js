import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Draggable } from "react-beautiful-dnd"

const DroppableListItem = ({
  draggableId,
  index,
  type,
  children,
  colorState: { isDragColor, notDragColor },
  inlineStyle,
  className
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
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={style}
            className={className}
          >
            {children}
          </li>
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
  className: PropTypes.string,
  colorState: PropTypes.shape({
    isDragColor: PropTypes.string,
    notDragColor: PropTypes.string
  }).isRequired
}

DroppableListItem.defaultProps = {
  type: "DEFAULT",

  colorState: {
    isDragColor: "#e9f2fc",
    notDragColor: "#FFFFFF"
  }
}

export default DroppableListItem
