import React, { Fragment } from "react"
// ramda helpers
import { isNil } from "ramda"
// components
import ModalActions from "./components/ModalActions"
import IconMenu from "react-icons/lib/md/dehaze"
import IconClose from "react-icons/lib/md/close"
import Button from "base_components/RootButton"
import ContainerFlex from "base_components/ContainerFlex"
import DragDrop, {
  DroppableList,
  DroppableListItem
} from "base_components/DragDrop"
// props and default prop types.
import { headerActions, listActions, listActionsItem } from "./propTypes"
// resources
import modal from "hoc/modal"
import { ButtonAdd } from "../../styles"
import { headerActionsStyles, listActionsStyles } from "./styles"
import { listActionsData } from "./data"
import dataToArray from "utils/dataToArray"

/**
 * -------------------------------------
 * Item tab actions
 * @see HeaderActions
 * @see ListActions
 * -------------------------------------
 */
const ItemTabActions = ({ isOpen, onOpen, onClose }) => (
  <Fragment>
    <HeaderActions handleShow={onOpen} />
    <ListActions list={dataToArray(listActionsData)} />
    <ModalActions isOpen={isOpen} handleClose={onClose} />
  </Fragment>
)

export default modal(ItemTabActions)

/**
 * -------------------------------------
 * Header item tab actions
 * @see ItemTabActions
 * -------------------------------------
 */
const HeaderActions = headerActionsStyles(({ className, handleShow }) => (
  <header className={className}>
    <ButtonAdd text="Add" iconPosition="right" onHandlerClick={handleShow} />
  </header>
))

HeaderActions.propTypes = headerActions.props
HeaderActions.defaultProps = headerActions.default

/**
 * -------------------------------------
 * List actions
 * @see ItemTabActions
 * @see ListActionsItem
 * -------------------------------------
 */
const ListActions = listActionsStyles(({ className, onHandlerClick, list }) => (
  <DragDrop list={list}>
    <DroppableList
      droppableId="droppable-01"
      type="GROUP_ACTIONS"
      className={className}
    >
      {list => (
        <Fragment>
          {list.map((
            item,
            i // when adding border, we need to include the border in inlineStyle
          ) => (
            <DroppableListItem
              draggableId={item.id}
              type="GROUP_ACTIONS"
              index={i}
              key={item.id}
              inlineStyle={{ border: "1px solid #dadada" }}
            >
              <ListActionsItem item={item} />
            </DroppableListItem>
          ))}
        </Fragment>
      )}
    </DroppableList>
  </DragDrop>
))

ListActions.propTypes = listActions.props
ListActions.defaultProps = listActions.default

/**
 * -------------------------------------
 * List actions item
 * @see ListActions
 * -------------------------------------
 */
const ListActionsItem = ({ item }) => (
  <Fragment>
    <ContainerFlex isAlignCenter>
      <i>
        <IconMenu />
      </i>
      <div>
        <span>{item.label}</span>
        <p>{item.content}</p>
        {!isNil(item.fileRef) && (
          <Button light lightBorder>
            Download
          </Button>
        )}
      </div>
    </ContainerFlex>
    <ContainerFlex>
      <Button secondary>Edit</Button>
      <i>
        <IconClose />
      </i>
    </ContainerFlex>
  </Fragment>
)

ListActionsItem.propTypes = listActionsItem.props
ListActions.defaultProps = listActionsItem.default
