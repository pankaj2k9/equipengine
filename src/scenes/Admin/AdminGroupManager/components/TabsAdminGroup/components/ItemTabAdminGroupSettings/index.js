import React from 'react';

import Form from 'base_components/RootForm';
import Button from 'base_components/RootButton';
// sub-components
import PanelGeneralInfo from './components/PanelGeneralInfo';
import PanelUsers from './components/PanelUsers';
import PanelGroupNoticeBoard from './components/PanelGroupNoticeBoard';
import PanelControlGroup from './components/PanelControlGroup';

const ButtonUpdate = Button.extend`
  margin: 3em 0 5em;
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
