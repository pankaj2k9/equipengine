import React from 'react';
import styled from 'styled-components';

import SearchbarButtonFilter from './components/SearchbarButtonFilter';
import SearchbarDropdownCourse from './components/SearchbarDropdownCourse';
import SearchbarDropdownLesson from './components/SearchbarDropdownLesson';
import { $borderLightColor } from 'shared/color';

// creating styled component for searchbar container
export default styled(({ className }) => (
  <div className={className}>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarDropdownCourse />
    <SearchbarDropdownLesson />
  </div>
))`
  border-bottom: 1px solid ${$borderLightColor};
  padding: 2%;
  display: flex;
  flex-wrap: wrap;

  & > div,
  & > button {
    width: 45%;
    margin-bottom: 0.5em;
  }

  & > button {
    margin-right: 0.5em;
    border-radius: 4px;
  }

  & > div:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    padding: 27px 40px;
    width: 100%;

    flex-wrap: no-wrap;

    & > div,
    & > button {
      width: initial;

      margin-right: 16px;
    }
  }
`;
