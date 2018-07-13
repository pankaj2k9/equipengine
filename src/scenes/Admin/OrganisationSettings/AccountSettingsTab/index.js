import React, { Fragment, Component } from "react"
import { compose, pure } from "recompose"
import joi from "joi"
import { toastr } from "react-redux-toastr"

import ContainerFlex from "base_components/ContainerFlex"
import Divider from "base_components/Divider"

import Modal from "../AccountSettingsTabModal"

import {
  Form,
  Panel,
  Button,
  ButtonAdd,
  AddUserWrapper,
  GrayBorderContainer,
  HintText,
  Title,
  LanguageLabel,
  LanguageDropdown,
  UserListItem as UserListItemElement,
  UserListItemCloseIcon
} from "./elements"

import modal from "hoc/modal"

import {
  getDropdownValue,
  updateFieldValue,
  validate
} from "utils/formFunctions"

const validationSchema = joi.object().keys({})

const users = [
  {
    id: "gegae",
    name: "User1",
    avatar: "/static/media/user.002ba69c.png"
  },
  {
    id: "hjgh",
    name: "User2",
    avatar: "/static/media/user.002ba69c.png"
  },
  {
    id: "gh554h3",
    name: "User3",
    avatar: "/static/media/user.002ba69c.png"
  },
  {
    id: "y657iq",
    name: "User4",
    avatar: "/static/media/user.002ba69c.png"
  }
]

const language = "en"

const UserListItem = ({ user, remove }) => (
  <UserListItemElement>
    <span>{user.name}</span>
    <UserListItemCloseIcon onClick={() => remove(user.id)} />
  </UserListItemElement>
)

const PanelWebAddress = ({ onOpen, users, onChange, removeUser }) => (
  <Panel title="Accounts" paddingBottom="1.6em">
    <HintText>
      Be careful - this will provide users access to everything related to this
      organisation account.
    </HintText>
    <AddUserWrapper isAlignCenter isSpaceBetween>
      <Title>Administrators</Title>
      <ButtonAdd
        onHandlerClick={() => {
          onOpen()
        }}
        text="Add user"
        iconPosition="right"
      />
    </AddUserWrapper>
    <GrayBorderContainer>
      {!users.length && "No administrators"}
      {users.map(user => <UserListItem user={user} remove={removeUser} />)}
    </GrayBorderContainer>
    <Divider />
  </Panel>
)

const PanelLanguage = ({ language, onChange }) => (
  <Panel title="Language" borderBottom="0" paddingBottom="0">
    <HintText>
      This will change the default language displayed on all menus within your
      organisation.
    </HintText>
    <ContainerFlex isAlignCenter>
      <LanguageLabel>Select Default Language</LanguageLabel>
      <LanguageDropdown
        placeholder="Language"
        name="country"
        onChange={selectedOption =>
          onChange(getDropdownValue(selectedOption), "language")
        }
        options={[
          { label: "English", value: "en" },
          { label: "German", value: "he" },
          { label: "Russian", value: "ru" }
        ]}
      />
    </ContainerFlex>
  </Panel>
)

class ItemTabAccountSettings extends Component {
  state = {
    allUsers: [],
    admins: [],
    language: ""
  }

  componentDidMount = () => {
    // TODO: Change to getting from store
    const admins = [users[0], users[1]]

    this.setState({ allUsers: users, admins, language })
  }

  onChange = (e, selector) => {
    const fields = this.state

    const nextFields = updateFieldValue(e, selector, fields)

    this.setState(nextFields)
  }

  addAdmins = newAdminsIds => {
    const { allUsers } = this.state

    const newAdmins = allUsers.filter(({ id }) =>
      newAdminsIds.some(adminId => adminId === id)
    )

    // TODO: Change to action dispatch
    this.setState(({ admins, ...rest }) => ({
      admins: admins.concat(newAdmins),
      ...rest
    }))
  }

  removeAdmin = removeId => {
    const admins = [...this.state.admins]

    const nextAdmins = admins.filter(({ id }) => id !== removeId)

    // TODO: Change to action dispatch
    this.setState(state => ({ ...state, admins: nextAdmins }))
  }

  onSubmit = () => {
    const fields = this.state

    const validationResult = validate(fields, validationSchema)

    if (!validationResult.error) {
      return toastr.success("Account settings", "Data updated successfully")
    }

    toastr.error(
      "Validation error",
      validationResult.error.details[0].context.label
    )
  }

  render() {
    const { onOpen, onClose, isOpen } = this.props

    const { admins, language, allUsers } = this.state

    const nonAdmins = allUsers.filter(
      ({ id }) => !admins.some(admin => admin.id === id)
    )

    return (
      <Fragment>
        <Form>
          <PanelWebAddress
            users={admins}
            onOpen={onOpen}
            onChange={this.onChange}
            removeUser={this.removeAdmin}
          />
          <PanelLanguage language={language} onChange={this.onChange} />
          <Button onClick={this.onSubmit}>Update</Button>
        </Form>
        <Modal
          users={nonAdmins}
          handleClose={onClose}
          isOpen={isOpen}
          onSubmit={this.addAdmins}
        />
      </Fragment>
    )
  }
}

export default compose(
  modal,
  pure
)(ItemTabAccountSettings)
