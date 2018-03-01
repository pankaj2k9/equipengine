import React from 'react'
import {addIndex, map} from 'ramda'
import DragDrop, {
  DroppableList,
  DroppableListItem
} from 'base_components/DragDrop'

// fake generator of item.
const getItems = (count) =>
  Array.from({length: count}, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`
  }))

/**
 * transformerToReactElem :: (Object a, Number) -> Object React
 *
 * Transforming the element from the array to React element.
 * @param {Object} item element in the array.
 * @param {Number} i index of element.
 * @retur {object} react element.
 */
const transformerToReactElem = (item, i) => (
  <DroppableListItem draggableId={item.id} index={i} key={item.id}>
    <span>{item.content}</span>
  </DroppableListItem>
)

/**
 * createDroppableListItems :: Array a -> Array React
 *
 * Create droppable list items based on the given array of objects.
 * @param {Array} list
 * @return {Array} array of react elements.
 */
const createDroppableListItems = addIndex(map)(transformerToReactElem)

const Sample = () => (
  <DragDrop list={getItems(3)}>
    <DroppableList droppableId='droppable-01'>
      {createDroppableListItems}
    </DroppableList>
  </DragDrop>
)

export default Sample
