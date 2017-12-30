import React from 'react';

import Form from 'base_components/RootForm';
import Button from 'base_components/RootButton';
// sub-components
import PanelGeneralInfo from './components/PanelGeneralInfo';
import PanelUsers from './components/PanelUsers';
import PanelGroupNoticeBoard from './components/PanelGroupNoticeBoard';
import PanelControlGroup from './components/PanelControlGroup';

const ButtonUpdate = Button.extend`
  margin-top: 3em;

  @media screen and (min-width: 768px) {
    margin-bottom: 5em;
  }
`;

const ItemTabAdminGroupSettings = () => (
  <Form>
    <PanelGeneralInfo />
    <PanelUsers />
    <PanelGroupNoticeBoard />
    <PanelControlGroup />
    <ButtonUpdate>Update</ButtonUpdate>
  </Form>
);

export default ItemTabAdminGroupSettings;
