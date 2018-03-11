import React, { Fragment } from 'react'
import styled from 'styled-components'
//
import Form, { FormGroup, Label, Text, TextArea } from 'base_components/RootForm'
import IconMenu from 'react-icons/lib/md/dehaze'
import IconClose from 'react-icons/lib/md/close'
import DragDrop, { DroppableList, DroppableListItem } from 'base_components/DragDrop'

/**
 * /////////////////////////// Item tab basics component
 */
const ItemTabBasics = () => (
  <Form>
    <FormGroup>
      <Label>Lesson Name</Label>
      <Text name='name' placeholder='Communication and culture' />
    </FormGroup>
    <FormGroup>
      <Label>Lesson Description</Label>
      <TextArea
        name='description'
        placeholder='Communication and culture is focused on those who want to serve in their local community.'
        row={7}
      />
    </FormGroup>
    <FormGroup>
      <Label>Things to do</Label>
      <ListThingsToDo />
    </FormGroup>
    <FormGroup>
      <Label>Featured Video / Audio</Label>
      <ListThingsToDo />
    </FormGroup>
  </Form>
)

/**
 * /////////////////////////// List things to do
 */
const ContainerList = styled.div`
  border: 1px solid #D8D8D8;
  margin-top: 0.7em;
  padding: 1em;
`

const ListThingsToDo = () => (
  <ContainerList>
    <DragDrop>
      <DroppableList droppableId='droppable-01' type='GROUP_THINGS_TODO'>
        {(list) => (
          <Fragment>
            <DroppableListItem
              draggableId='draggable-01'
              type='GROUP_THINGS_TODO'
              index={0}
              key='jjdsfi88sdfj'
            >
              <ListThingsToDoItem />
            </DroppableListItem>
            <DroppableListItem
              draggableId='draggable-02'
              type='GROUP_THINGS_TODO'
              index={1}
              key='jjdsfi88sdfm'
            >
              <ListThingsToDoItem />
            </DroppableListItem>
          </Fragment>
        )}
      </DroppableList>
    </DragDrop>
  </ContainerList>
)

/**
 * /////////////////////////// List things to do item
 */
const ListThingsToDoItem = styled(({className}) => (
  <li className={className}>
    <div>
      <i><IconMenu /></i>
      <span>1 x Reading Activity</span>
    </div>
    <i><IconClose /></i>
  </li>
))`

  padding-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: #D8D8D8;

  i {
    font-size: 1.4rem;
  }

  span {
    color: #000000;
    margin-left: 1em;
  }
`

export default ItemTabBasics
