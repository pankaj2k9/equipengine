import React, { Fragment } from 'react'
// components
import IconMenu from 'react-icons/lib/md/dehaze'
import IconClose from 'react-icons/lib/md/close'
import Button from 'base_components/RootButton'
import ContainerFlex from 'base_components/ContainerFlex'
// props and default prop types.
import { headerActionsProps } from './propTypes'
import { headerActionsDefaultProps } from './defaultProps'
// styles
import { ButtonAdd } from '../../styles'
import { headerActionsStyles, listActionsStyles } from './styles'

/**
 * -------------------------------------
 * Item tab actions
 * -------------------------------------
 */
const ItemTabActions = () => (
  <Fragment>
    <HeaderActions />
    <ListActions />
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
// TODO: Implement drag and drop features.
const ListActions = listActionsStyles(({className, onHandlerClick}) => (
  <ul className={className}>
    <ListActionsItem />
    <ListActionsItem />
  </ul>
))

/**
 * -------------------------------------
 * List actions item
 * -------------------------------------
 */
const ListActionsItem = () => (
  <li>
    <ContainerFlex isAlignCenter>
      <i><IconMenu /></i>
      <div>
        <span>Question</span>
        <p>Do you agree with the statement that “absolutes are no longer popular” in our society? Give some examples from your own experience.</p>
      </div>
    </ContainerFlex>
    <ContainerFlex>
      <Button secondary>Edit</Button>
      <i><IconClose /></i>
    </ContainerFlex>
  </li>
)
