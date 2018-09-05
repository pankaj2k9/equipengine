import styled from "styled-components"

import BaseButton from "base_components/RootButton"
import ButtonAddBase from "base_components/ButtonAdd"
import BasePanel from "base_components/Panel"
import ContainerFlex from "base_components/ContainerFlex"
import Dropdown from "base_components/RootDropdown"

import CloseIcon from "react-icons/lib/md/close"

export const Button = styled(BaseButton)`
  margin-top: 3em;

  @media screen and (min-width: 768px) {
    margin-bottom: 5em;
  }
`

export const ButtonAdd = styled(ButtonAddBase)`
  width: 130px;
`

export const Form = styled.div`
  padding: 0 2%;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 96%;
  }
`

export const Panel = styled(BasePanel)`
  &:first-child {
    padding-top: 0;
  }

  header {
    margin-bottom: 0.8em;
  }

  @media screen and (min-width: 768px) {
    width: 100%;

    header {
      margin-bottom: 1em;
    }
  }
`

export const UserListItemCloseIcon = styled(CloseIcon)`
  font-size: 23px;
  color: #afafaf;
  cursor: pointer;
`

export const UserListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const HintText = styled.span`
  color: #6d6d6d;
  margin-bottom: 15px;
  display: inline-block;
`

export const Title = styled.h4`
  font-size: 14px;
  color: #000000;
  font-weight: 800;
  margin: 0;
  margin-bottom: ${({ isStandard: x }) => (x ? "15px" : 0)};
`

export const AddUserWrapper = styled(ContainerFlex)`
  margin-bottom: 15px;
`

export const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-position: top;
  object-fit: cover;
  margin-right: 20px;
`

export const GrayBorderContainer = styled.div`
  border: 1px solid #e0e0e0;
  padding: 14px;
  margin-bottom: 30px;

  max-height: 360px;
  overflow-y: auto;
`

export const LanguageLabel = styled.span`
  margin-right: 25px;
`

export const LanguageDropdown = styled(Dropdown)`
  width: 130px;
`
