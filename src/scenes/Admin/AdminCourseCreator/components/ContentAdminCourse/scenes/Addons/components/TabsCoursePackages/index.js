import React from 'react'
import styled from 'styled-components'
// components
import Container from 'base_components/Container'
import { Tab } from 'react-bootstrap'
import Tabs from 'base_components/Tabs'
import ItemTabCourse from './components/ItemTabCourse'

const TabsCoursePackages = styled(({className}) => (
  <Container className={className}>
    <Tabs style={{marginTop: 0}}>
      <Tab eventKey={1} title='Course Packages'>
        <ItemTabCourse />
      </Tab>
    </Tabs>
  </Container>
))`
  margin-top: 0;

  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 0;

    .Tabs {
      width: 100%;

      > ul {
        padding: 0 35px;

        a {
          padding-top: 0;
        }
      }
    }
  }
`

export default TabsCoursePackages
