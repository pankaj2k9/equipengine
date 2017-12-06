import React from 'react';
import styled from 'styled-components';

import CollapsiblePanel from 'base_components/CollapsiblePanel';
import './styles.css';

const BodyItemCourse = styled(({ className }) => (
  <div className={className}>
    <div>
      <span>Enable / Disable</span>
    </div>
    <CollapsiblePanel buttonText="View Lessons">
      <div>itlog mabaho</div>
    </CollapsiblePanel>
  </div>
))`
  > div:first-child{
      display: flex;
      align-items: center;
      color: #9FA6AD;
      margin-bottom: 1.3em
      font-size: 12px;
  }

  @media screen and (min-width: 768px){
    display: flex;
    justify-content: space-between;
  }
`;

export default BodyItemCourse;
