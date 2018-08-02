import React, { Component } from "react"

import ButtonAdd from "base_components/ButtonAdd"
import HeaderItemTab from "base_components/HeaderItemTab"
import SelectItemModal from "base_components/SelectItemModal"
import modal from "hoc/modal"

class GroupCoursesActionBar extends Component {
  render() {
    const {
      isFetchingCourses,
      courses,
      searchTerm,
      isOpen: isOpenAddGroupModal,
      onOpen: onOpenAddGroupModal,
      onClose: onCloseAddGroupModal,
      onAddCourses,
      onSearchCourse
    } = this.props

    return (
      <div>
        <HeaderItemTab>
          <ButtonAdd
            onHandlerClick={onOpenAddGroupModal}
            text="Add course to group"
          />
        </HeaderItemTab>
        <SelectItemModal
          isOpen={isOpenAddGroupModal}
          title="Add course to group"
          searchBarPlaceholder="Search courses"
          searchTerm={searchTerm}
          loading={isFetchingCourses}
          items={courses}
          formatListItem={({ title }) => title}
          onSearch={onSearchCourse}
          onClose={onCloseAddGroupModal}
          onSubmit={onAddCourses}
        />
      </div>
    )
  }
}

export default modal(GroupCoursesActionBar)
