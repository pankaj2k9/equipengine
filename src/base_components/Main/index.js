import React from 'react';
import PropTypes from 'prop-types';

import Breadcrumbs from 'base_components/Breadcrumbs';
import Tables, { TableRow } from 'base_components/Tables';
import List, { ListRow, ListRowLeft, ListRowRight } from 'base_components/List';
import Tabs from 'base_components/Tabs';
import { Tab } from 'react-bootstrap';
import './styles.css';

const Main = () => {
  return (
    <main className="Main">
      <Breadcrumbs />
      <Tabs>
        <Tab eventKey={1} title="Tab 1">
          <Tables>
            <thead>
              <TableRow>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </TableRow>
              <TableRow>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </TableRow>
            </tbody>
          </Tables>
        </Tab>
        <Tab eventKey={2} title="Tab 2">
          <List>
            <ListRow>
              <ListRowLeft className="compose1">Im in left</ListRowLeft>
              <ListRowRight className="compose2"> Im in right</ListRowRight>
            </ListRow>
          </List>
        </Tab>
      </Tabs>
    </main>
  );
};

export default Main;
