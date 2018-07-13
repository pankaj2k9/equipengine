import React from "react"

import ButtonUpdate from "base_components/ButtonUpdate"

import GeneralInfoGroup from "./GeneralInfoGroup"
import UsersGroup from "./UsersGroup"
import NoticeboardGroup from "./NoticeboardGroup"
import ControlGroup from "./ControlGroup"

const ItemTabAdminGroupSettings = () => (
  <div>
    <GeneralInfoGroup />
    <UsersGroup />
    <NoticeboardGroup />
    <ControlGroup />
    <ButtonUpdate>Update</ButtonUpdate>
  </div>
)

export default ItemTabAdminGroupSettings
