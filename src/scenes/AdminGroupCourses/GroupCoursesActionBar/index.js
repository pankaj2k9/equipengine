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
      isOpen: isOpenAddCourseModal,
      onOpen: onOpenAddCourseModal,
      onClose: onCloseAddCourseModal,
      onAddCourses,
      onSearchCourse
    } = this.props

    return (
      <div>
        <HeaderItemTab>
          <ButtonAdd
            onHandlerClick={onOpenAddCourseModal}
            text="Add course to group"
          />
        </HeaderItemTab>
        <SelectItemModal
          isOpen={isOpenAddCourseModal}
          title="Add course to group"
          searchBarPlaceholder="Search courses"
          searchTerm={searchTerm}
          loading={isFetchingCourses}
          items={courses}
          formatListItem={({ title }) => title}
          onSearch={onSearchCourse}
          onClose={onCloseAddCourseModal}
          onSubmit={onAddCourses}
        />
      </div>
    )
  }
}

export default modal(GroupCoursesActionBar)
