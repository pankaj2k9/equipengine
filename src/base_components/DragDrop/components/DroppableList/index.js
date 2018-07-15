import React from "react"
import PropTypes from "prop-types"
import { Droppable } from "react-beautiful-dnd"
import DroppableListItemWrapper from "./components/DroppableListItemWrapper"

const DroppableList = ({
  droppableId,
  type,
  children,
  list,
  className,
  colorState: { isDragColor, notDragColor },
  wrapperElement
}) => {
  console.log({ list })
  const WrapperElement = wrapperElement

  return (
    <Droppable droppableId={droppableId} type={type}>
      {(provided, snapshot) => (
        <WrapperElement
          className={className}
          innerRef={provided.innerRef}
          style={{
            backgroundColor: snapshot.isDraggingOver
              ? isDragColor
              : notDragColor
          }}
        >
          <DroppableListItemWrapper list={list}>
            {children(list)}
            {provided.placeholder}
          </DroppableListItemWrapper>
        </WrapperElement>
      )}
    </Droppable>
  )
}
DroppableList.propTypes = {
  droppableId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  className: PropTypes.string,
  colorState: PropTypes.shape({
    isDragColor: PropTypes.string,
    notDragColor: PropTypes.string
  }).isRequired
}

DroppableList.defaultProps = {
  droppableId: "droppable-1",
  type: "DEFAULT",
  list: [],
  colorState: {
    isDragColor: "#DEDEDE",
    notDragColor: "#ffffff"
  },
  wrapperElement: ({ children, innerRef, ...props }) => (
    <ul ref={innerRef} {...props}>
      {children}
    </ul>
  )
}

export default DroppableList
