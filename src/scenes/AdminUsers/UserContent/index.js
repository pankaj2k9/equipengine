import React from "react"

import Box from "base_components/Box"
import Centerer from "base_components/PageCenterer"
import UpdateUserForm from "../UpdateUserForm"

const UserContent = ({ user, onSubmit, onSendResetPasswordToken }) => {
  if (!user) {
    return <Centerer>Please, select any group to see content</Centerer>
  }

  return (
    <Box>
      <UpdateUserForm
        user={user}
        onSubmit={onSubmit}
        onSendResetPasswordToken={onSendResetPasswordToken}
      />
    </Box>
  )
}

export default UserContent
