import React from 'react';
import styled from 'styled-components';

import Panel from 'base_components/Panel';
// sub-components
import PanelGeneralInfo from './components/PanelGeneralInfo';

const ItemTabAdminGroupSettings = () => (
  <div>
    <PanelGeneralInfo />
    <Panel title="General Information">
      <span>flock of ducks</span>
    </Panel>
  </div>
);

export default ItemTabAdminGroupSettings;
