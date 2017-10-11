import React from 'react';
import PropTypes from 'prop-types';

import Breadcrumbs from 'base_components/Breadcrumbs';
import Tables, { TableRow } from 'base_components/Tables';
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
      </Tabs>
    </main>
  );
};

export default Main;
