import React from "react"
import PropTypes from "prop-types"
import {
  compose,
  withStateHandlers,
  withHandlers,
  pure,
  mapProps
} from "recompose"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import IconAdd from "react-icons/lib/md/add-circle-outline"
import Loading from "base_components/Loading"
import { Text } from "base_components/RootForm"
import {
  Header as HeaderElement,
  H5,
  List,
  ListTitle,
  Hint,
  ListItem as ListItemElement,
  Checkbox,
  ListItemLabel
} from "./elements"

const ListItem = ({ item, select, deselect, formatListItem }) => {
  const { id, isSelected } = item
  const toggle = () => (isSelected ? deselect(id) : select(id))

  return (
    <ListItemElement>
      <Checkbox checked={isSelected} onChange={toggle} />{" "}
      <ListItemLabel onClick={toggle}>
        {formatListItem ? formatListItem(item) : id}
      </ListItemLabel>
    </ListItemElement>
  )
}

const Header = ({ title }) => (
  <HeaderElement>
    <IconAdd color="#BFBFBF" fontSize={39} /> <H5>{title || "Add"}</H5>
  </HeaderElement>
)

const Body = ({
  items,
  select,
  deselect,
  hint,
  listTitle,
  loading,
  formatListItem,
  searchBarPlaceholder,
  searchTerm,
  onSearch
}) => (
  <div>
    <Text
      value={searchTerm}
      onChange={onSearch}
      placeholder={searchBarPlaceholder || "Search"}
    />
    {hint && <Hint>{hint}</Hint>}
    {listTitle && <ListTitle>{listTitle}</ListTitle>}
    {loading ? (
      <Loading />
    ) : (
      <List>
        {!items.length && "No items"}
        {items.map(item => (
          <ListItem
            select={select}
            deselect={deselect}
            item={item}
            formatListItem={formatListItem}
          />
        ))}
      </List>
    )}
  </div>
)

const Footer = ({ onSubmit }) => <Button onClick={onSubmit}>Add</Button>

const SelectItemModal = ({
  items,
  title,
  hint,
  listTitle,
  formatListItem,
  isOpen,
  select,
  deselect,
  searchBarPlaceholder,
  searchTerm,
  loading,
  onClose,
  onSubmit,
  onSearch
}) => (
  <BaseModal
    isOpen={isOpen}
    onClose={onClose}
    header={<Header title={title} />}
    body={
      <Body
        select={select}
        deselect={deselect}
        items={items}
        hint={hint}
        listTitle={listTitle}
        formatListItem={formatListItem}
        loading={loading}
        searchBarPlaceholder={searchBarPlaceholder}
        searchTerm={searchTerm}
        onSearch={onSearch}
      />
    }
    footer={<Footer onSubmit={onSubmit} />}
  />
)

SelectItemModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired
}

// TODO rewrite the logic from recompose to class cause it will be simpler..
export default compose(
  withStateHandlers(
    {
      selectedIds: []
    },
    {
      select: ({ selectedIds }) => idSelect => ({
        selectedIds: selectedIds.concat(idSelect)
      }),
      deselect: ({ selectedIds }) => idDeselect => ({
        selectedIds: selectedIds.filter(id => id !== idDeselect)
      }),
      // Modal does not unmount, so we clear state when it closing
      clear: () => () => ({ selectedIds: [] })
    }
  ),
  withHandlers({
    onSearch: ({ onSearch }) => ({ target: { value } }) => onSearch(value),
    // We must keep this method in separated "withHandlers"
    onClose: ({ onClose, clear }) => () => {
      clear()
      onClose()
    }
  }),
  withHandlers({
    onSubmit: ({ onSubmit, selectedIds, onClose }) => e => {
      e.preventDefault()

      onSubmit(selectedIds)

      onClose()
    }
  }),
  mapProps(({ selectedIds, items, ...rest }) => ({
    items: Array.isArray(items)
      ? items.map(item => ({
          ...item,
          isSelected: !!selectedIds.find(id => id === item.id)
        }))
      : [],
    selectedIds,
    ...rest
  })),
  pure
)(SelectItemModal)
