import React, { Fragment } from 'react'
//
import ContainerFlex from 'base_components/ContainerFlex'
import Dropdown from 'base_components/Dropdown'
import { MenuItem } from 'react-bootstrap'
import { Label } from 'base_components/RootForm'
import Spinner from 'base_components/Spinner'
import IconMenu from 'react-icons/lib/md/dehaze'
import IconClose from 'react-icons/lib/md/close'
import DragDrop, { DroppableList, DroppableListItem } from 'base_components/DragDrop'
// assets
import listObjectivesStyles, { ContainerAction } from './styles'

const DropdownResult = Dropdown.extend`
  width: 100%;
`

/**
 * -------------------------------------
 * List
 * @see ListObjectives
 * -------------------------------------
 */
const ListObjectives = listObjectivesStyles(({className}) => (
  <DragDrop>
    <DroppableList droppableId='123' className={className}>
      {
        () => (
          <Fragment>
            <DroppableListItem draggableId='1' index={0}>
              <ListItemObjective />
            </DroppableListItem>
            <DroppableListItem draggableId='2' index={1}>
              <ListItemObjective />
            </DroppableListItem>
          </Fragment>
        )
      }
    </DroppableList>
  </DragDrop>
))

export default ListObjectives

/**
 * -------------------------------------
 * ListItemObjective
 * @see ListObjectives
 * -------------------------------------
 */
const ListItemObjective = () => (
  <Fragment>
    <ContainerFlex isSpaceBetween>
      <ContainerFlex isAlignCenter className='ListItem__title'>
        <i>
          <IconMenu />
        </i>
        <span>Complete all the lessons</span>
      </ContainerFlex>
      <ContainerFlex isAlignCenter className='ListItem__action'>
        <ContainerAction>
          <DropdownResult title='Pass/Fail' id='dropdown-size-medium'>
            <MenuItem eventKey='1'>Percentage</MenuItem>
            <MenuItem eventKey='2'>Pass/Fail</MenuItem>
            <MenuItem eventKey='3'>Competency</MenuItem>
            <MenuItem eventKey='4'>Manual Entry</MenuItem>
          </DropdownResult>
          <Label>Assesment Method</Label>
        </ContainerAction>
        <ContainerAction>
          <Spinner />
          <Label>Weight of Mark</Label>
        </ContainerAction>
        <i>
          <IconClose />
        </i>
      </ContainerFlex>
    </ContainerFlex>
  </Fragment>
)
