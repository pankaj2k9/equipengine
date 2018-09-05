import React from "react"
import PropTypes from "prop-types"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import { Label } from "base_components/RootForm"

import {
  Header as HeaderElement,
  H5,
  List,
  ListItem as ListItemElement,
  Checkbox
} from "./elements"

import IconAdd from "react-icons/lib/md/add-circle-outline"

const ListItem = ({ id, title, selected, onChange }) => (
  <ListItemElement>
    <Checkbox
      name={`group-${id}`}
      id={id}
      checked={selected}
      onChange={e =>
        onChange(
          {
            checked: e.target.checked,
            id: e.target.id
          },
          "participatedGroupIds"
        )
      }
    />
    <Label htmlFor={id}>{title}</Label>
  </ListItemElement>
)

const Header = () => (
  <HeaderElement>
    <IconAdd color="#BFBFBF" fontSize={39} /> <H5>Add group</H5>
  </HeaderElement>
)

const Body = ({ groups, selectedGroupIds, onChange }) => (
  <div>
    <List>
      {groups.map(({ id, title }) => {
        if (selectedGroupIds.includes(id))
          return (
            <ListItem
              id={id}
              title={title}
              selected={true}
              onChange={onChange}
            />
          )
        else return <ListItem id={id} title={title} onChange={onChange} />
      })}
    </List>
  </div>
)

const Footer = ({ isSubmitting, onSubmit }) => (
  <Button disabled={isSubmitting} onClick={onSubmit}>
    Add
  </Button>
)

const Modal = ({
  handleClose,
  isOpen,
  groups,
  selectedGroupIds,
  onChange,
  isSubmitting,
  onSubmit
}) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header />}
    body={
      <Body
        groups={groups}
        selectedGroupIds={selectedGroupIds}
        onChange={onChange}
      />
    }
    footer={<Footer isSubmitting={isSubmitting} onSubmit={onSubmit} />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Modal
