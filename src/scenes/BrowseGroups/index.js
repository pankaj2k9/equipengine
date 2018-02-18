import React from 'react';
import styled from 'styled-components';
//
import HeaderBrowseGroups from './components/HeaderBrowseGroups';
import BodyBrowseGroups from './components/BodyBrowseGroups';

/**
   TODO:
   - Add components to Head.
   - Add components to Body.
 */

const ContainerBrowseGroups = styled.section`
  width: 60%;
  margin: 3em auto;
`;

const BrowseGroups = () => (
  <ContainerBrowseGroups>
    <HeaderBrowseGroups />
    <BodyBrowseGroups />
  </ContainerBrowseGroups>
);

export default BrowseGroups;
