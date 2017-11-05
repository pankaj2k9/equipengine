import React from 'react';
import styled from 'styled-components';

import SearchbarButtonFilter from './components/SearchbarButtonFilter';
import SearchbarDropdownCourse from './components/SearchbarDropdownCourse';
import SearchbarDropdownLesson from './components/SearchbarDropdownLesson';
import SearchbarForm from './components/SearchbarForm';
import Flagged from './components/Flagged';
import { $borderLightColor } from 'shared/color';

// creating styled component for searchbar container
export default styled(({ className }) => (
  <div className={className}>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarDropdownCourse />
    <SearchbarDropdownLesson />
    <SearchbarForm />
    <Flagged className="Flagged" />
  </div>
))`
  border-bottom: 1px solid ${$borderLightColor};
  padding: 2%;
  margin-top: 3%;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding: 27px 40px;
    display: flex;
    align-items: center;
  }
`;
