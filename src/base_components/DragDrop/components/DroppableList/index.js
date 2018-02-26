import React from 'react';
import PropTypes from 'prop-types';
import {Droppable} from 'react-beautiful-dnd';
import DroppableListItemWrapper from './components/DroppableListItemWrapper';

const DroppableList = ({droppableId, type, children, list, className}) => (
  <Droppable droppableId={droppableId} type={type}>
    {(provided, snapshot) => (
      <ul
        className={className}
        ref={provided.innerRef}
        style={{
          backgroundColor: snapshot.isDraggingOver ? '#DEDEDE' : '#DEDEDE'
        }}
      >
        <DroppableListItemWrapper list={list}>
          {children(list)}
          {provided.placeholder}
        </DroppableListItemWrapper>
      </ul>
    )}
  </Droppable>
);

DroppableList.propTypes = {
  droppableId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  className: PropTypes.string
};

DroppableList.defaultProps = {
  droppableId: 'droppable-1',
  type: 'DEFAULT',
  list: [],
  className: ''
};

export default DroppableList;
