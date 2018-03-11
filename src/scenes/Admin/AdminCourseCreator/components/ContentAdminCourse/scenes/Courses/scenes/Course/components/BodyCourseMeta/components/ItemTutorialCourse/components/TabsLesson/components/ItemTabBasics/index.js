import React, { Fragment } from 'react'
// components
import Form, { FormGroup, Label, Text, TextArea } from 'base_components/RootForm'
import ButtonAdd from 'base_components/ButtonAdd'
import IconMenu from 'react-icons/lib/md/dehaze'
import IconClose from 'react-icons/lib/md/close'
import DragDrop, { DroppableList, DroppableListItem } from 'base_components/DragDrop'
// propTypes and defaultProps
import { labelGroupProps } from './propTypes'
import { labelGroupDefaultProps } from './defaultProps'
// styles
import { labelGroupStyles, ContainerList, listThingsStyles } from './styles'

/**
 * -------------------------------------
 * Item tab basics
 * -------------------------------------
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
      <LabelGroup title='Things to do' />
      <ListThingsToDo />
    </FormGroup>
    <FormGroup>
      <LabelGroup title='Featured Video / Audio' />
    </FormGroup>
  </Form>
)

export default ItemTabBasics

/**
 * -------------------------------------
 * Label group
 * -------------------------------------
 */
const LabelGroup = labelGroupStyles(({className, title, onHandlerClick}) => (
  <div className={className}>
    <span>{title}</span>
    <ButtonAdd text='Add' iconPosition='right' onHandlerClick={onHandlerClick} />
  </div>
))

LabelGroup.propTypes = labelGroupProps
LabelGroup.defaultProps = labelGroupDefaultProps

/**
 * -------------------------------------
 * List things to do
 * -------------------------------------
 */
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
 * -------------------------------------
 * List things to do item
 * -------------------------------------
 */
const ListThingsToDoItem = listThingsStyles(({className}) => (
  <li className={className}>
    <div>
      <i><IconMenu /></i>
      <span>1 x Reading Activity</span>
    </div>
    <i><IconClose /></i>
  </li>
))
