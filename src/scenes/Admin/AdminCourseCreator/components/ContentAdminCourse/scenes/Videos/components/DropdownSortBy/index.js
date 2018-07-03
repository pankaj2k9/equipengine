import React, { Fragment } from "react"
//
import styled from "styled-components"
//
import { MenuItem } from "react-bootstrap"
//
import Dropdown from "base_components/Dropdown"
//
import ArrowDown from "react-icons/lib/md/keyboard-arrow-down"

// extending the dropdown button style.

const DropdownSortBy = ({ className }) => (
  <Dropdown
    className={`${className}__dropdown`}
    noCaret
    title={
      <Fragment>
        Sort by <ArrowDown className={`${className}__icon`} />
      </Fragment>
    }
    id="dropdown-size-medium"
  >
    <MenuItem eventKey="1">Action</MenuItem>
    <MenuItem eventKey="2">Another action</MenuItem>
    <MenuItem eventKey="3">Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey="4">Separated link</MenuItem>
  </Dropdown>
)

export default styled(DropdownSortBy)`
  &__dropdown {
    padding: 11px 15px 12px;
    background-color: #d8d8d8;
    border: 0;
    text-transform: uppercase;
    font-family: "karla", sans-serif;
    font-size: 12px;
    font-weight: 800;
    border-radius: 3px;
    width: 100%;
    height: 40px;
    padding-top: 8px;

    @media screen and (min-width: 768px) {
      width: 150px;
    }
  }

  &__icon {
    font-size: 26px;
  }
`
