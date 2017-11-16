import React from 'react';

import { MainInnerContainer, MainLeft, MainRight } from 'base_components/Main';
import TabsGroup from './components/TabsGroup';
import SearchBar from 'base_components/RootSearchBar';
import InformationText from 'base_components/InformationText';

// extending the styles of right container.
const RightContainer = MainRight.extend`
  @media screen and (max-width: 767px) {
    margin-top: 1.7em;
  }
`;

// the Groups scene.
const Groups = () => (
  <MainInnerContainer>
    <MainLeft>
      <TabsGroup />
    </MainLeft>
    <RightContainer>
      <SearchBar />
      <InformationText text="Learn more about groups" to="/learn-groups" />
    </RightContainer>
  </MainInnerContainer>
);

export default Groups;
