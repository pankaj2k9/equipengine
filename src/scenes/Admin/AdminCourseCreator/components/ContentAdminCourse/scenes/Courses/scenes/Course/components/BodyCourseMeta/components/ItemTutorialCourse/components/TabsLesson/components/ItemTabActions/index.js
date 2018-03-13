import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { compose, reduce, keys, append, prop, assoc } from 'ramda'
// components
import IconMenu from 'react-icons/lib/md/dehaze'
import IconClose from 'react-icons/lib/md/close'
import Button from 'base_components/RootButton'
import ContainerFlex from 'base_components/ContainerFlex'
import DragDrop, { DroppableList, DroppableListItem } from 'base_components/DragDrop'
// props and default prop types.
import { headerActionsProps } from './propTypes'
import { headerActionsDefaultProps } from './defaultProps'
// styles
import { ButtonAdd } from '../../styles'
import { headerActionsStyles, listActionsStyles } from './styles'

// TODO: move this action into data files.
// static list actions data.
const listActions = {
  'jasfkl3243sjadf': {
    label: 'Question',
    content: 'Do you agree with the statement that “absolutes are no longer popular” in our society? Give some examples from your own experience.'
  },
  'jasfkl3243sjgjh': {
    label: 'Reading',
    content: 'Read the PDF document “BEC” pages 22-25.'
  }
}

// TODO: Move this function into utils.
// trasform the data as object into array.
const dataObjectToArray = (object) =>
  reduce(
    (arr, property) => {
      // create new object based on the given object. We will add id field on the existing shape of object.
      const getObject = compose(assoc('id', property), prop(property))
      // append the new object on the list
      return append(getObject(object), arr)
    },
    [],
    keys(object) // return an array of enumerable properties of object.
  )

/**
 * -------------------------------------
 * Item tab actions
 * -------------------------------------
 */
const ItemTabActions = () => (
  <Fragment>
    <HeaderActions />
    <ListActions list={dataObjectToArray(listActions)} />
  </Fragment>
)

export default ItemTabActions

/**
 * -------------------------------------
 * Header item tab actions
 * -------------------------------------
 */
const HeaderActions = headerActionsStyles(({className, onHandlerClick}) => (
  <header className={className}>
    <ButtonAdd text='Add' iconPosition='right' onHandlerClick={onHandlerClick} />
  </header>
))

ItemTabActions.propTypes = headerActionsProps
ItemTabActions.defaultProps = headerActionsDefaultProps

/**
 * -------------------------------------
 * List actions
 * -------------------------------------
 */
const ListActions = listActionsStyles(({className, onHandlerClick, list}) => (
  <div className={className}>
    <DragDrop list={list}>
      <DroppableList droppableId='droppable-01' type='GROUP_ACTIONS'>
        {(list) => (
          <Fragment>
            {
              list.map((item, i) => ( // when adding border, we need to include the border in inlineStyle
                <DroppableListItem
                  draggableId={item.id}
                  type='GROUP_ACTIONS'
                  index={i}
                  key={item.id}
                  inlineStyle={{border: '1px solid #dadada'}}
                >
                  <ListActionsItem item={item} />
                </DroppableListItem>
              ))
            }
          </Fragment>
        )}
      </DroppableList>
    </DragDrop>
  </div>
))

// TODO: Move this assignment statement into propTypes file.
ListActions.propTypes = {
  list: PropTypes.array.isRequired
}

// TODO: Move this assignment statement into defaultProps file.
ListActions.defaultProps = {
  list: []
}

/**
 * -------------------------------------
 * List actions item
 * -------------------------------------
 */
const ListActionsItem = ({item}) => (
  <Fragment>
    <ContainerFlex isAlignCenter>
      <i><IconMenu /></i>
      <div>
        <span>{item.label}</span>
        <p>{item.content}</p>
      </div>
    </ContainerFlex>
    <ContainerFlex>
      <Button secondary>Edit</Button>
      <i><IconClose /></i>
    </ContainerFlex>
  </Fragment>
)

// TODO: Move this assignment statement into propTypes file.
ListActionsItem.propTypes = {
  item: PropTypes.object.isRequired
}

// TODO: Move this assignment statement into defaultProps file.
ListActions.defaultProps = {
  object: {}
}
