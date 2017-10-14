import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'react-bootstrap';

import Tabs from 'base_components/Tabs';
import ItemListTutorials from './components/ItemListTutorials';

const TabsCourse = () => {
    return (
        <Tabs>
            <Tab eventKey={1} title="Tutorials">
                <ItemListTutorials />
            </Tab>
            <Tab eventKey={2} title="Group Discussions">
                Tab 2 content
            </Tab>
            <Tab eventKey={3} title="Files">
                Tab 3 content
            </Tab>
        </Tabs>
    );
};

TabsCourse.propTypes = {};

export default TabsCourse;
