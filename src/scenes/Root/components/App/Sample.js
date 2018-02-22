import React, { Component } from 'react';
import { List } from 'immutable';
import { not, isNil } from 'ramda';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorderItems = (list, startIndex, endIndex) =>
  List(list)
    .delete(startIndex) // delete element to the position of given startIndex then return the new array which excludes the deleted element.
    .insert(endIndex, List(list).get(startIndex)) // insert the element from startIndex to the position of endIndex.
    .toArray(); // return an array instead of List

class Sample extends Component {
  state = {
    items: getItems(3)
  };

  // this handler is used for re-ordering the items on the list.
  onDragEnd = ({ source, destination }) =>
    not(isNil(destination)) // handle not null or undefined destination
      ? this.setState({
          items: reorderItems(this.state.items, source.index, destination.index)
        })
      : undefined;

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable-1" type="PERSON">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',
                width: '50%'
              }}
            >
              {this.state.items.map(({ id, content }, i) => (
                <Draggable draggableId={id} type="PERSON" index={i} key={id}>
                  {(provided, snapshot) => {
                    // extending the DraggableStyle with our own inline styles
                    const style = {
                      backgroundColor: snapshot.isDragging ? 'green' : 'white',
                      fontSize: 18,
                      ...provided.draggableProps.style
                    };
                    return (
                      <div>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={style}
                        >
                          <span>{content}</span>
                        </div>
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Sample;
