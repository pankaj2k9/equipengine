import React, { Fragment } from "react"

import IconMenu from "react-icons/lib/md/dehaze"

import { Label, TextArea } from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"
import FileChooser from "base_components/FileChooser"
import Divider from "base_components/Divider"
import Panel from "base_components/Panel"
import ButtonAdd from "base_components/ButtonAdd"
import DragDrop, {
  DroppableList as BaseDroppableList,
  DroppableListItem
} from "base_components/DragDrop"

import { Root, FormGroup, CheckBox } from "./elements"
import { ListItemRoot } from "../List/elements"

import { DROPPABLE_LIST_TYPE } from "../constants"

import { openFileChooser } from "utils/formFunctions"

import form from "hoc/form"

const ListItem = form({
  description: ""
})(({ fields: { description }, onChange }) => (
  <ListItemRoot>
    <i>
      <IconMenu />
    </i>
    <CheckBox />
    <TextArea
      value={description}
      onChange={e => onChange(e.target.value, "description")}
      placeholder="Communication and culture is focused on those who want to serve in their local community."
    />
  </ListItemRoot>
))

const Form = ({ fields: { question }, refs: { file }, onChange }) => (
  <Root>
    <FormGroup>
      <Label>Question*</Label>
      <TextArea
        value={question}
        onChange={e => onChange(e.target.value, "question")}
      />
    </FormGroup>
    <FormGroup>
      <Label>Upload File</Label>
      <ButtonUpload onClick={e => openFileChooser(e, file.current)} />
      <FileChooser
        onChooseFiles={([file]) => onChange(file, "file")}
        ref={file}
      />
    </FormGroup>
    <Divider />
    <Panel
      isFullWidth
      title="Add option to answers*"
      AdditionalTitle={() => <ButtonAdd text="Add" iconPosition="right" />}
    >
      <DragDrop>
        <BaseDroppableList droppableId="droppable-11" type="QUIZ_QUESTIONS">
          {list => (
            <Fragment>
              <DroppableListItem
                draggableId="draggable-11"
                type={DROPPABLE_LIST_TYPE}
                index={0}
                key="jjdsfi88sdfj"
              >
                <ListItem />
              </DroppableListItem>
              <DroppableListItem
                draggableId="draggable-12"
                type={DROPPABLE_LIST_TYPE}
                index={0}
                key="jjdsfi88sdfj"
              >
                <ListItem />
              </DroppableListItem>
              <DroppableListItem
                draggableId="draggable-13"
                type={DROPPABLE_LIST_TYPE}
                index={0}
                key="jjdsfi88sdfj"
              >
                <ListItem />
              </DroppableListItem>
            </Fragment>
          )}
        </BaseDroppableList>
      </DragDrop>
    </Panel>
  </Root>
)

export default form(
  {
    question: "",
    file: null
  },
  ["file"]
)(Form)
