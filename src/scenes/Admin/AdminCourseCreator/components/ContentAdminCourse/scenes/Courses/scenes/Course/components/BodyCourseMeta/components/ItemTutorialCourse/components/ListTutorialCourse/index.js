import React, { Fragment } from "react"
// components
import ContainerHeaderItemTab from "../../../ContainerHeaderItemTab"
import ButtonAdd from "base_components/ButtonAdd"
import DragDrop, {
  DroppableList,
  DroppableListItem
} from "base_components/DragDrop"
import ContainerFlex from "base_components/ContainerFlex"
import iconPlay from "resources/images/play-button.svg"
import IconMenu from "react-icons/lib/md/dehaze"
import IconClose from "react-icons/lib/md/close"
import Form, { Switch } from "base_components/RootForm"
// styles
import { ContainerListTutorialCourse, listItemTutorialStyles } from "./styles"
import { DROPPABLE_LIST_TYPE } from "./constants"

/**
 * -------------------------------------
 * ListTutorialCourse
 * @see ListTutorial
 * -------------------------------------
 */
const ListTutorialCourse = () => (
  <ContainerListTutorialCourse>
    <ContainerHeaderItemTab>
      <ButtonAdd text="Add new lesson" iconPosition="right" />
    </ContainerHeaderItemTab>
    <DragDrop>
      <ListTutorial />
    </DragDrop>
  </ContainerListTutorialCourse>
)

ListTutorialCourse.propTypes = {}
ListTutorialCourse.defaultProps = {}
export default ListTutorialCourse

/**
 * -------------------------------------
 * ListTutorial
 * @see ListTutorialCourse
 * @see ListItemTutorial
 * -------------------------------------
 */
const ListTutorial = () => (
  <DroppableList droppableId="droppable-01" type="GROUP_COURSE">
    {list => (
      <Fragment>
        <DroppableListItem
          draggableId="draggable-01"
          type={DROPPABLE_LIST_TYPE}
          index={0}
          key="jjdsfi88sdfj"
        >
          <ListItemTutorial />
        </DroppableListItem>
        <DroppableListItem
          draggableId="draggable-02"
          type={DROPPABLE_LIST_TYPE}
          index={1}
          key="jjdsfi88sdfm"
        >
          <ListItemTutorial />
        </DroppableListItem>
      </Fragment>
    )}
  </DroppableList>
)

ListTutorial.propTypes = {}
ListTutorial.defaultProps = {}

/**
 * -------------------------------------
 * ListItemTutorial
 * @see ListTutorial
 * -------------------------------------
 */
const ListItemTutorial = listItemTutorialStyles(({ className }) => (
  <ContainerFlex isAlignCenter isSpaceBetween className={className}>
    <ContainerFlex isAlignCenter isSpaceBetween>
      <i>
        <IconMenu />
      </i>
      <img alt="icon play" src={iconPlay} />
      <div>
        <p>Tutorial 1</p>
        <span>00:05:25</span>
      </div>
    </ContainerFlex>
    <ContainerFlex>
      <Form>
        <Switch name="switchTutorial" />
        <i>
          <IconClose />
        </i>
      </Form>
    </ContainerFlex>
  </ContainerFlex>
))
