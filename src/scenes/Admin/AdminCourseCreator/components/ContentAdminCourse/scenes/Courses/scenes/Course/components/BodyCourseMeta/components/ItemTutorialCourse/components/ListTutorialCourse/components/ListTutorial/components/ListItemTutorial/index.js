import React from 'react'
import styled from 'styled-components'
//
import ContainerFlex from 'base_components/ContainerFlex'
import iconPlay from 'resources/images/play-button.svg'
import IconMenu from 'react-icons/lib/md/dehaze'
import IconClose from 'react-icons/lib/md/close'
import Form, { Switch } from 'base_components/RootForm'

const ListItemTutorial = styled(({ className }) => (
  <ContainerFlex isAlignCenter isSpaceBetween className={className}>
    <ContainerFlex isAlignCenter isSpaceBetween>
      <i>
        <IconMenu />
      </i>
      <img alt='icon play' src={iconPlay} />
      <div>
        <p>Tutorial 1</p>
        <span>00:05:25</span>
      </div>
    </ContainerFlex>
    <ContainerFlex>
      <Form>
        <Switch name='switchTutorial' />
        <i>
          <IconClose />
        </i>
      </Form>
    </ContainerFlex>
  </ContainerFlex>
))`
  border-bottom: 1px solid #d8d8d8;
  padding: 1.5em 0;

  > div:first-child {
    > i:first-child {
      font-size: 1.2rem;
      color: #d8d8d8;
      margin-right: 12px;
    }

    > img {
      margin-right: 12px;
    }

    > div {
      p {
        font-size: 1rem;
        color: #111111;
        margin-bottom: 0.2em;
      }

      span {
        color: #9fa6ad;
      }
    }
  }

  > div:last-child {
    > form {
      display: flex;
      align-items: center;

      > label,
      > button {
        margin-right: 12px;
      }

      > i {
        color: #afafaf;
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (min-width:768px) {
    padding: 1.5em 1.5em 1.5em 0;
  }
`

export default ListItemTutorial
