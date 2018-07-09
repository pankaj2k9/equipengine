import React from "react"

import HeaderItemTab from "base_components/HeaderItemTab"
import ButtonAdd from "base_components/ButtonAdd"

import TableAdminGroupCourses from "./TableAdminGroupCourses"

import Modal from "./Modal"

import modal from "hoc/modal"

const courses = [
  {
    name: "course1"
  },
  {
    name: "course2"
  }
]

const ItemTabAdminGroupCourses = ({ onOpen, onClose, isOpen }) => (
  <div>
    <HeaderItemTab>
      <ButtonAdd onHandlerClick={onOpen} text="Add course to group" />
    </HeaderItemTab>
    <TableAdminGroupCourses />
    <Modal courses={courses} handleClose={onClose} isOpen={isOpen} />
  </div>
)

export default modal(ItemTabAdminGroupCourses)
