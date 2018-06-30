import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
//
import ContainerFlex from "base_components/ContainerFlex"
import iconSettings from "resources/images/iconSettings.svg"

const HeaderHome = styled(({ className }) => (
  <ContainerFlex isAlignCenter isSpaceBetween className={className}>
    <h4>Hi Jane!</h4>
    <Link to="/secure/settings">
      <button>
        <img alt="icon settings" src={iconSettings} /> Settings
      </button>
    </Link>
  </ContainerFlex>
))`
  padding-left: 15px;
  h4 {
    margin-top: 0;
    font-weight: 400;
    color: #80808b;
  }

  button {
    background: none;
    border: 1px solid #b9b9b9;
    color: #80808b;
    padding: 4px 13px 4px 7px;
    position: relative;
    top: -3px;
    border-radius: 4px;
    transition: all 300ms ease-in;

    img {
      vertical-align: text-bottom;
      margin-right: 5px;
    }

    &:hover {
      border-color: #000000;
      color: #000000;
    }
  }
`

export default HeaderHome
