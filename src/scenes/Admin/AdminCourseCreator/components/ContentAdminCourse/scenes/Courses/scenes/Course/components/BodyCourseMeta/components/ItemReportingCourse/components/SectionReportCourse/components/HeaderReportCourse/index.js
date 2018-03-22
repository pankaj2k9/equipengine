import React from 'react'
//
import TitleSection from '../../../TitleSection'
import ContainerFlex from 'base_components/ContainerFlex'
// assets
import headerReportCourseStyles, { DropdownResult } from './styles'

const HeaderReportCourse = headerReportCourseStyles(({ className }) => (
  <header className={className}>
    <TitleSection>Report</TitleSection>
    <ContainerFlex isAlignCenter>
      <span>Final Mark Result</span>
      <DropdownResult
        dropdownName='markResult'
        options={[
          { label: 'Percentage', value: 'percentage' },
          { label: 'Pass/Fail', value: 'fail' },
          { label: 'Competency', value: 'competency' },
          { label: 'Manual Entry', value: 'manualEntry' }
        ]}
      />
    </ContainerFlex>
  </header>
))

export default HeaderReportCourse
