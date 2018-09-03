import React, { Component } from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"
import InfiniteScroll from "react-infinite-scroller"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import IconAdd from "react-icons/lib/md/add-circle-outline"
// import Loading from "base_components/Loading"
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
  onSearch,
  loadMore,
  pagination
}) => (
  <div>
    <Text
      value={searchTerm}
      onChange={onSearch}
      placeholder={searchBarPlaceholder || "Search"}
    />
    {hint && <Hint>{hint}</Hint>}
    {listTitle && <ListTitle>{listTitle}</ListTitle>}
    <List>
      {!items.length && "No items"}
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        hasMore={
          !loading &&
          pagination &&
          pagination.total_pages > pagination.current_page
        }
        useWindow={false}
        threshold={100}
      >
        {items.map(item => (
          <ListItem
            select={select}
            deselect={deselect}
            item={item}
            formatListItem={formatListItem}
          />
        ))}
      </InfiniteScroll>
    </List>
  </div>
)

const Footer = ({ onSubmit }) => <Button onClick={onSubmit}>Add</Button>

class SelectItemModal extends Component {
  state = {
    selectedIds: []
  }

  select = selectedId => {
    const { selectedIds } = this.state

    this.setState({
      selectedIds: selectedIds.concat(selectedId)
    })
  }

  unselect = unselectedId => {
    const { selectedIds } = this.state

    this.setState({
      selectedIds: selectedIds.filter(id => id !== unselectedId)
    })
  }

  clear = () =>
    this.setState({
      selectedIds: []
    })

  onSearch = ({ target: { value } }) => {
    const { onSearch } = this.props

    onSearch(value)
  }

  onClose = () => {
    const { onClose } = this.props

    this.clear()
    onClose()
  }

  onSubmit = event => {
    event.preventDefault()

    const { onSubmit } = this.props
    const { selectedIds } = this.state

    onSubmit(selectedIds)

    this.onClose()
  }

  render() {
    const {
      items,
      title,
      hint,
      listTitle,
      formatListItem,
      isOpen,
      searchBarPlaceholder,
      searchTerm,
      loading,
      loadMore,
      pagination
    } = this.props

    return (
      <BaseModal
        isOpen={isOpen}
        onClose={this.onClose}
        header={<Header title={title} />}
        body={
          <Body
            select={this.select}
            unselect={this.unselect}
            items={items}
            hint={hint}
            listTitle={listTitle}
            formatListItem={formatListItem}
            loading={loading}
            searchBarPlaceholder={searchBarPlaceholder}
            searchTerm={searchTerm}
            onSearch={this.onSearch}
            loadMore={loadMore}
            pagination={pagination}
          />
        }
        footer={<Footer onSubmit={this.onSubmit} />}
      />
    )
  }
}

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

export default compose(pure)(SelectItemModal)
