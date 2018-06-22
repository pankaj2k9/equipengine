import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//
import DateTime from 'base_components/DateTime'
import ContainerFlex from 'base_components/ContainerFlex'
import iconArrowRight from 'resources/images/arrowRight.svg'

const ListItem = styled(({ className }) => (
  <li className={className}>
    <ContainerFlex isSpaceBetween isAlignCenter>
      <DateTime date='22 Sep' time='2:22am' />
      <p>Jon Mcall commented on
        <Link to='/secure/activity'>Tutorial 1.1: Communication and Culture</Link>
      </p>
    </ContainerFlex>
    <ContainerFlex isSpaceBetween isAlignCenter>
      <DateTime date='22 Sep' time='2:22am' />
      <p>Jill Mane commented on
        <Link to='/secure/activity'>Tutorial 1.3: Becoming Equipped to Communicate</Link>
      </p>
    </ContainerFlex>
    <ContainerFlex isSpaceBetween isAlignCenter>
      <DateTime date='22 Sep' time='2:22am' />
      <p>Jon Mcall commented on
        <Link to='/secure/activity'>Tutorial 1.1: Communication and Culture</Link>
      </p>
    </ContainerFlex>
    <ContainerFlex isSpaceBetween isAlignCenter>
      <DateTime date='22 Sep' time='2:22am' />
      <p>Jill Mane commented on
        <Link to='/secure/activity'>Tutorial 1.3: Becoming Equipped to Communicate</Link>
      </p>
    </ContainerFlex>
    <ContainerFlex isSpaceBetween isAlignCenter>
      <DateTime date='22 Sep' time='2:22am' />
      <p>Jill Mane commented on
        <Link to='/secure/activity'>Tutorial 1.3: Becoming Equipped to Communicate</Link>
      </p>
    </ContainerFlex>
  </li>
))`
  margin-bottom: 1em;

  > div {
    margin-bottom: 1em;
    > div {
      margin-right: 1.8em;
    }
    p {
      color: #4e4e53;
      margin-bottom: 0;
      text-align: inherit;
      font-size: 12px;
      > a {
        color: #2093e9;
        margin-left: 3px;
        font-weight: 400;
      }
    }
  }
`

const HeaderListLatest = styled.header`
  border-bottom: 1px solid #dadada;
  padding: 10px 10px 11px 15px;
  margin-top: 1em;
  color: #000;
  img {
    float: right;
    width: 20px;
  }
`

const ListContainer = styled.ul`
  padding: 1em 0;
`

const ListLatestNotification = () => (
  <div>
    <HeaderListLatest>Latest Activity <Link to='/secure/activity'><img alt='icon arrow right' src={iconArrowRight} /></Link></HeaderListLatest>
    <ListContainer>
      <ListItem />
    </ListContainer>
  </div>
)

export default ListLatestNotification
