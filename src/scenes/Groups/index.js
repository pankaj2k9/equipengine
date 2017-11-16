import React from 'react';

import { MainInnerContainer, MainLeft, MainRight } from 'base_components/Main';
import SearchBar from 'base_components/RootSearchBar';

const Groups = () => (
  <MainInnerContainer>
    <MainLeft>
      <div>Main Left</div>
    </MainLeft>
    <MainRight>
      <SearchBar />
    </MainRight>
  </MainInnerContainer>
);

export default Groups;
