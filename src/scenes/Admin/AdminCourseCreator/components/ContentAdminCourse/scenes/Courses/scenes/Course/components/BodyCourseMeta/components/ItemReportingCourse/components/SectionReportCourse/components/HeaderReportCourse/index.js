import React from 'react'
import styled from 'styled-components'
//
import TitleSection from '../../../TitleSection'
import Dropdown from 'base_components/RootDropdown'
import css from 'utils/addStyles'

// TODO: Extract the propTypes and styles to other files.
const DropdownResult = css(`
  width: 160px;
`)(Dropdown)

const HeaderReportCourse = styled(({ className }) => (
  <header className={className}>
    <TitleSection>Report</TitleSection>
    <div>
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
    </div>
  </header>
))`
  padding-bottom: 0.8em;
  border-bottom: 1px solid #d8d8d8;

  > div > span:first-child {
    margin-right: 2em;
  }
`

export default HeaderReportCourse
