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

  & button {
    margin-bottom: 0.5em;
  }

  & > button,
  & > div {
    margin-right: 0.5em;
    border-radius: 4px;
  }

  & > div:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    & > button,
    & > div {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 27px 40px;
    width: 100%;

    display: flex;

    & > div,
    & > button {
      margin-right: 16px;
    }

    & > button {
      width: 100px;
    }
  }
`;
