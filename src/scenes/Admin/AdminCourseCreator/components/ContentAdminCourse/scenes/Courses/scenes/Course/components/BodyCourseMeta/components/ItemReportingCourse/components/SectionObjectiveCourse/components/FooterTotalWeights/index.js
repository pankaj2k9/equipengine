import React from 'react'
import styled from 'styled-components'
//
import Button from 'base_components/RootButton'
import { FooterFlex } from 'base_components/ContainerFlex'

// for label component
const LabelTotal = styled.label`
  display: block;
  text-align: center;
  background-color: #e9e9e9;
  font-size: 1.5rem;
  color: ${(props) => props.color};
`

const FooterTotalWeights = styled(({ className }) => (
  <FooterFlex
    className={className}
    justifyContent='space-between'
  >
    <Button secondary>Preview Report</Button>
    <div>
      <span>Total mark with weights</span>
      <LabelTotal color='#E40012'>120</LabelTotal>
      <LabelTotal>100</LabelTotal>
    </div>
  </FooterFlex>
))`
  padding: 1.2em 1.2em 1.2em 0;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 1.8em;

  button {
    align-self: flex-end;
    width: 140px;
  }

  span {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0.6em;
  }
`

export default FooterTotalWeights
