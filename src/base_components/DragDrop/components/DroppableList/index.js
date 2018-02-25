import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import DroppableListItemWrapper from './components/DroppableListItemWrapper';

const DroppableList = ({ droppableId, type, children, list }) => (
  <Droppable droppableId={droppableId} type={type}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        style={{
          backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',
          width: '50%',
          padding: 8
        }}
      >
        <DroppableListItemWrapper list={list}>
          {children(list)}
          {provided.placeholder}
        </DroppableListItemWrapper>
      </div>
    )}
  </Droppable>
);

DroppableList.propTypes = {
  droppableId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
};

DroppableList.defaultProps = {
  droppableId: 'droppable-1',
  type: 'DEFAULT',
  list: []
};

export default DroppableList;
