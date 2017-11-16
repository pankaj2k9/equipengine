import React from 'react';

import { MainInnerContainer, MainLeft, MainRight } from 'base_components/Main';
import SearchBar from 'base_components/RootSearchBar';
import InformationText from 'base_components/InformationText';

const Groups = () => (
  <MainInnerContainer>
    <MainLeft>
      <div>Main Left</div>
    </MainLeft>
    <MainRight>
      <SearchBar />
      <InformationText text="Learn more about groups" to="/learn-groups" />
    </MainRight>
  </MainInnerContainer>
);

export default Groups;
