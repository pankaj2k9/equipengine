import React, { Fragment } from "react"
// components
import Form, {
  FormGroup,
  Label,
  Text,
  TextArea
} from "base_components/RootForm"
import Button from "base_components/RootButton"
import IconMenu from "react-icons/lib/md/dehaze"
import IconClose from "react-icons/lib/md/close"
import DragDrop, {
  DroppableList,
  DroppableListItem
} from "base_components/DragDrop"
// propTypes and defaultProps
import { labelGroup } from "./propTypes"
// styles
import ButtonAdd from "base_components/ButtonAdd"
import { labelGroupStyles, listThingsStyles } from "./styles"
import ModalActions from "./components/ModalActions"
import { pure, compose } from "recompose"
// resourses
import modal from "hoc/modal"
import form from "hoc/form"

/**
 * -------------------------------------
 * Item tab basics
 * @see LabelGroup
 * @see ListThingsToDo
 * -------------------------------------
 */
const TutorialBasicsTab = ({
  isOpen,
  onOpen,
  onClose,
  fields: { name, description },
  onChange
}) => (
  <Fragment>
    <Form>
      <FormGroup>
        <Label>Lesson Name</Label>
        <Text
          value={name}
          onChange={e => onChange(e.target.value, "name")}
          name="name"
          placeholder="Communication and culture"
        />
      </FormGroup>
      <FormGroup>
        <Label>Lesson Description</Label>
        <TextArea
          value={description}
          onChange={e => onChange(e.target.value, "description")}
          name="description"
          placeholder="Communication and culture is focused on those who want to serve in their local community."
          row={7}
        />
      </FormGroup>
      <FormGroup>
        <LabelGroup title="Things to do" />
        <ListThingsToDo />
      </FormGroup>
      <FormGroup>
        <LabelGroup
          title="Featured Video / Audio"
          withButton
          onHandlerClick={onOpen}
        />
      </FormGroup>
      <Button>Save</Button>
    </Form>
    <ModalActions isOpen={isOpen} handleClose={onClose} />
  </Fragment>
)

export default compose(
  form({ name: "", description: "" }),
  modal,
  pure
)(TutorialBasicsTab)

/**
 * -------------------------------------
 * Label group
 * @see ItemTabBasics
 * -------------------------------------
 */
const LabelGroup = labelGroupStyles(
  ({ className, title, onHandlerClick, withButton }) => (
    <div className={className}>
      <span>{title}</span>
      {withButton && (
        <ButtonAdd
          text="Add"
          iconPosition="right"
          onHandlerClick={onHandlerClick}
        />
      )}
    </div>
  )
)

LabelGroup.propTypes = labelGroup.props
LabelGroup.defaultProps = labelGroup.default

/**
 * -------------------------------------
 * List things to do
 * @see ItemTabBasics
 * @see ListItemThingsToDo
 * -------------------------------------
 */
const ListThingsToDo = listThingsStyles(({ className }) => (
  <DragDrop>
    <DroppableList
      droppableId="droppable-01"
      type="GROUP_THINGS_TODO"
      className={className}
    >
      {list => (
        <Fragment>
          <DroppableListItem
            draggableId="draggable-01"
            type="GROUP_THINGS_TODO"
            index={0}
            key="jjdsfi88sdfj"
          >
            <ListItemThingsToDo />
          </DroppableListItem>
          <DroppableListItem
            draggableId="draggable-02"
            type="GROUP_THINGS_TODO"
            index={1}
            key="jjdsfi88sdfm"
          >
            <ListItemThingsToDo />
          </DroppableListItem>
        </Fragment>
      )}
    </DroppableList>
  </DragDrop>
))

/**
 * -------------------------------------
 * List things to do item
 * @see ListThingsToDo
 * -------------------------------------
 */
const ListItemThingsToDo = () => (
  <Fragment>
    <div>
      <i>
        <IconMenu />
      </i>
      <span>1 x Reading Activity</span>
    </div>
    <i>
      <IconClose />
    </i>
  </Fragment>
)
