import React from 'react'
//
import Button from 'base_components/RootButton'
import footerTotalWeightsStyles, { FooterFlex, LabelTotal } from './styles'

const FooterTotalWeights = footerTotalWeightsStyles(({ className }) => (
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
))

export default FooterTotalWeights
