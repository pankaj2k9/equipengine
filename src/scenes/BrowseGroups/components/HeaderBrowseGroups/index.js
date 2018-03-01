import React from 'react'
import styled from 'styled-components'
//
import ContainerFlex from 'base_components/ContainerFlex'
import iconSettings from 'resources/images/iconSettings.svg'

const HeaderBrowseGroups = styled(({ className }) => (
  <ContainerFlex isAlignCenter isSpaceBetween className={className}>
    <h4>Hi Jane!</h4>
    <button>
      <img alt='icon settings' src={iconSettings} />
    </button>
  </ContainerFlex>
))`
  h4 {
    margin-top: 0;
    font-weight: 800;
    color: #000000;
  }

  button {
    background: none;
    border: 1px solid #b9b9b9;
    padding: 0.3em 0.5em;
    border-radius: 4px;
    transition: all 300ms ease-in;

    img {
      vertical-align: text-bottom;
    }

    &:hover {
      border-color: #000000;
    }
  }
`

export default HeaderBrowseGroups
