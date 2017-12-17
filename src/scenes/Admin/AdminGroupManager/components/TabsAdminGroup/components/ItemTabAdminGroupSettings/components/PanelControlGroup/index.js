import React from 'react';
import styled from 'styled-components';

import Panel from 'base_components/Panel';

// for list item control.
import Button from 'base_components/RootButton';
import { Label } from 'base_components/RootForm';

const ListControl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItemControl = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8em;

  &:last-child {
    margin-bottom: 0;
  }

  button {
    margin-right: 1.5em;
  }

  label {
    font-size: 12px;
    max-width: 250px;
  }
`;

const PanelControlGroup = () => (
  <Panel>
    <ListControl>
      <ListItemControl>
        <Button large light lightBorder>
          Pause Group
        </Button>
        <Label light>
          Group remains visible to teachers but access is denied for students.
        </Label>
      </ListItemControl>
      <ListItemControl>
        <Button light large lightBorder>
          Remove Group
        </Button>
        <Label light>
          Once this group has been removed it cannot be restored. All data will
          be lost.
        </Label>
      </ListItemControl>
    </ListControl>
  </Panel>
);

export default PanelControlGroup;
