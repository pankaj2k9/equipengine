import React, { Fragment } from 'react'
//
import ContainerFlex from 'base_components/ContainerFlex'
import { Label } from 'base_components/RootForm'
import Spinner from 'base_components/Spinner'
import IconMenu from 'react-icons/lib/md/dehaze'
import IconClose from 'react-icons/lib/md/close'
import DragDrop, { DroppableList, DroppableListItem } from 'base_components/DragDrop'
// assets
import listObjectivesStyles, { ContainerAction, DropdownResult } from './styles'

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
          <DropdownResult
            name='dropdownObjective'
            options={[
              {label: 'Percentage', value: 'percentage'},
              {label: 'Pass/Fail', value: 'passFail'},
              {label: 'Competency', value: 'competency'},
              {label: 'Manual Entry', value: 'manualEntry'}
            ]}
          />
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
