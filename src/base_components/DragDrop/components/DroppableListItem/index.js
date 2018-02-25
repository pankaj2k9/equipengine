import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const DroppableListItem = ({ draggableId, index, type, children }) => (
  <Draggable
    draggableId={draggableId}
    type={type}
    index={index}
    key={draggableId}
  >
    {(provided, snapshot) => {
      // extending the DraggableStyle with our own inline styles
      const style = {
        backgroundColor: snapshot.isDragging ? 'green' : 'white',
        fontSize: 18,
        padding: 2,
        margin: '0 0 2px 0',
        ...provided.draggableProps.style
      };
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
      );
    }}
  </Draggable>
);

DroppableListItem.propTypes = {
  draggableId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.element
};

DroppableListItem.defaultProps = {
  type: 'DEFAULT'
};

export default DroppableListItem;
