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
  className,
  wrapperElement
}) => {
  const WrapperElement = wrapperElement

  return (
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
          ...provided.draggableProps.style,
          display: snapshot.isDragging && "table"
        }
        return (
          <Fragment>
            <WrapperElement
              innerRef={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={style}
              className={className}
            >
              {children}
            </WrapperElement>
            {provided.placeholder}
          </Fragment>
        )
      }}
    </Draggable>
  )
}

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
  }).isRequired,
  wrapperElement: PropTypes.element
}

DroppableListItem.defaultProps = {
  type: "DEFAULT",

  colorState: {
    isDragColor: "#e9f2fc",
    notDragColor: "#FFFFFF"
  },
  wrapperElement: ({ children, innerRef, ...props }) => (
    <li ref={innerRef} {...props}>
      {children}
    </li>
  )
}

export default DroppableListItem
