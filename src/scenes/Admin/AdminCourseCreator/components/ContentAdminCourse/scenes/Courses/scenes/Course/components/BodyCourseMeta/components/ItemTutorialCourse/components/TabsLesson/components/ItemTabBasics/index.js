/** @module ItemTabBasics */
import React, { Fragment } from 'react'
// components
import Form, { FormGroup, Label, Text, TextArea } from 'base_components/RootForm'
import IconMenu from 'react-icons/lib/md/dehaze'
import IconClose from 'react-icons/lib/md/close'
import DragDrop, { DroppableList, DroppableListItem } from 'base_components/DragDrop'
// propTypes and defaultProps
import {
  labelGroup
}
  from './propTypes'
// styles
import { ButtonAdd } from '../../styles'
import { labelGroupStyles, listThingsStyles } from './styles'

/**
 * -------------------------------------
 * Item tab basics
 * @see LabelGroup
 * @see ListThingsToDo
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
 * @see ItemTabBasics
 * -------------------------------------
 */
const LabelGroup = labelGroupStyles(({className, title, onHandlerClick}) => (
  <div className={className}>
    <span>{title}</span>
    <ButtonAdd text='Add' iconPosition='right' onHandlerClick={onHandlerClick} />
  </div>
))

LabelGroup.propTypes = labelGroup.props
LabelGroup.defaultProps = labelGroup.default

/**
 * -------------------------------------
 * List things to do
 * @see ItemTabBasics
 * @see ListThingsToDoItem
 * -------------------------------------
 */
const ListThingsToDo = listThingsStyles(({className}) => (
  <DragDrop>
    <DroppableList
      droppableId='droppable-01'
      type='GROUP_THINGS_TODO'
      className={className}
    >
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
))

// TODO: Rename this component - it should be ListItem
// Our naming convention will be - {Semantic Name}{Namespace} . E.g - ListTutorial
/**
 * -------------------------------------
 * List things to do item
 * @see ListThingsToDo
 * -------------------------------------
 */
const ListThingsToDoItem = () => (
  <Fragment>
    <div>
      <i><IconMenu /></i>
      <span>1 x Reading Activity</span>
    </div>
    <i><IconClose /></i>
  </Fragment>
)
