import React, { Component, Fragment } from "react"

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
      isOpen,
      onOpen,
      onClose,
      onAddCourses,
      onSearchCourse
    } = this.props

    return (
      <Fragment>
        <HeaderItemTab>
          <ButtonAdd
            iconPosition="right"
            onHandlerClick={onOpen}
            text="Add course to group"
          />
        </HeaderItemTab>
        <SelectItemModal
          isOpen={isOpen}
          title="Add course to group"
          searchBarPlaceholder="Search courses"
          searchTerm={searchTerm}
          loading={isFetchingCourses}
          items={courses}
          formatListItem={({ title }) => title}
          onSearch={onSearchCourse}
          onClose={onClose}
          onSubmit={onAddCourses}
        />
      </Fragment>
    )
  }
}

export default modal(GroupCoursesActionBar)
