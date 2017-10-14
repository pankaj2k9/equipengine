import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'react-bootstrap';

import Tabs from 'base_components/Tabs';
import ItemListTutorials from './components/ItemListTutorials';
import ItemTableTutorialsFile from './components/ItemTableTutorialsFile';

const TabsCourse = ({ style }) => {
    return (
        <Tabs style={style}>
            <Tab eventKey={1} title="Tutorials">
                <ItemListTutorials />
            </Tab>
            <Tab eventKey={2} title="Group Discussions">
                Tab 2 content
            </Tab>
            <Tab eventKey={3} title="Files">
                <ItemTableTutorialsFile />
            </Tab>
        </Tabs>
    );
};

TabsCourse.propTypes = {
    style: PropTypes.object
};

export default TabsCourse;
