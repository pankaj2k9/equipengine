import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//
import ContainerFlex from 'base_components/ContainerFlex'
import iconArrowRight from 'resources/images/arrowRight.svg'

const ListItem = styled(({ className }) => (
  <li className={className}>
    <ContainerFlex isSpaceBetween isAlignCenter>
      <p>No activity to show.</p>
    </ContainerFlex>
  </li>
))`
  margin-bottom: 1em;

  p {
    color: #9fa6ad;
    margin-bottom: 0;
    text-align: inherit;
    font-size: 12px;
    padding-left: 18px;
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

const HomeListLatestNotification = () => (
  <div>
    <HeaderListLatest>Latest Activity <Link to='/secure/activity'><img alt='icon arrow right' src={iconArrowRight} /></Link></HeaderListLatest>
    <ListContainer>
      <ListItem />
    </ListContainer>
  </div>
)

export default HomeListLatestNotification
