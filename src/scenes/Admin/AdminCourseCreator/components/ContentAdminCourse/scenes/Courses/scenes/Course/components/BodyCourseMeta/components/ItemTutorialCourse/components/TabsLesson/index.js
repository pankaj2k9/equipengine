import React from 'react'
import styled from 'styled-components'
//
import ContainerBodyAdmin from 'scenes/Admin/components/ContainerAdminPanel/components/ContainerBodyAdmin'
import { Tab } from 'react-bootstrap'
import Tabs from 'base_components/Tabs'

const TabsLesson = styled(({className}) => (
  <ContainerBodyAdmin className={className}>
    <Tabs className='TabsLesson'>
      <Tab eventKey={1} title='Basics'>
        basics
      </Tab>
      <Tab eventKey={2} title='Actions'>
        actions
      </Tab>
      <Tab eventKey={3} title='Files'>
        files
      </Tab>
    </Tabs>
  </ContainerBodyAdmin>
))`
  .TabsLesson {
    margin-top: 1.4em;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
    padding: 16px 0;

    .TabsLesson {
      margin-top: 20px;

      .nav-tabs, .tab-content {
        padding: 0 35px;
      }
    }
  }
`

export default TabsLesson
