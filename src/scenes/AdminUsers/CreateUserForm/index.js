import React from "react"
import joi from "joi"
//
import { ADMIN_ROLE, STUDENT_ROLE, TEACHER_ROLE } from "services/constants"
import Dropdown from "base_components/RootDropdown"
import { Label, Text } from "base_components/RootForm"
import { StyledFormGroup, Root } from "./elements"

const validationSchema = joi.object().keys({
  email: joi
    .string()
    .required()
    .label("Email is missing"),
  firstName: joi
    .string()
    .required()
    .label("First name is missing"),
  lastName: joi
    .string()
    .required()
    .label("Last name is missing"),
  role: joi
    .string()
    .required()
    .label("Role is missing"),
  phone: joi
    .string()
    .required()
    .label("Phone is missing")
})

const UserForm = ({
  fields: { firstName, lastName, email, role, phone },
  onChange
}) => (
  <Root>
    <StyledFormGroup>
      <Label>Email*</Label>
      <Text value={email} onChange={e => onChange(e.target.value, "email")} />
    </StyledFormGroup>
    <StyledFormGroup>
      <Label>First Name*</Label>
      <Text
        value={firstName}
        onChange={e => onChange(e.target.value, "firstName")}
      />
    </StyledFormGroup>
    <StyledFormGroup>
      <Label>Last Name*</Label>
      <Text
        value={lastName}
        onChange={e => onChange(e.target.value, "lastName")}
      />
    </StyledFormGroup>
    <StyledFormGroup>
      <Label>Phone*</Label>
      <Text value={phone} onChange={e => onChange(e.target.value, "phone")} />
    </StyledFormGroup>
    <StyledFormGroup>
      <Label>Role*</Label>
      <Dropdown
        placeholder="Role"
        value={role}
        onChange={e => onChange(e && e.value ? e.value : STUDENT_ROLE, "role")}
        options={[
          { label: "Student", value: STUDENT_ROLE },
          { label: "Teacher", value: TEACHER_ROLE },
          { label: "Admin", value: ADMIN_ROLE }
        ]}
      />
    </StyledFormGroup>
  </Root>
)

export { UserForm as default, validationSchema }
