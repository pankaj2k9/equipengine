import React from 'react';
import styled from 'styled-components';

import Panel from 'base_components/Panel';
// sub-components
import PanelGeneralInfo from './components/PanelGeneralInfo';
import PanelUsers from './components/PanelUsers';
import PanelGroupNoticeBoard from './components/PanelGroupNoticeBoard';

const ItemTabAdminGroupSettings = () => (
  <div>
    <PanelGeneralInfo />
    <PanelUsers />
    <PanelGroupNoticeBoard />
  </div>
);

export default ItemTabAdminGroupSettings;
