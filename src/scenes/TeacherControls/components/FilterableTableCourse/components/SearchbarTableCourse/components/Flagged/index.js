import React from 'react';
import styled from 'styled-components';

import RootForm from 'base_components/RootForm';

const Flagged = styled(({ className }) => (
  <div className={className}>
    <RootForm>
      <input name="show-flagged" type="checkbox" value="" />
    </RootForm>
    <span>icon</span>
    <span className="Flagged__total">(12)</span>
  </div>
))`
  display: flex;

  .Flagged__total {
    color: #b5b5b5;
    font-size: 12px;
    font-weight: 800;
  }
`;

export default Flagged;
