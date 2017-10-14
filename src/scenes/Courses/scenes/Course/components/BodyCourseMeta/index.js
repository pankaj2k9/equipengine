import React from 'react';
import MediaQuery from 'react-responsive';

import Box from 'base_components/Box';
import TabsCourse from './components/TabsCourse';
import LatestGroupDiscussion from './components/LatestGroupDiscussions';

const BodyCourseMeta = () => {
    return (
        <div>
            <MediaQuery query="(max-device-width: 767px)">
                <Box>
                    <TabsCourse />
                    <LatestGroupDiscussion />
                </Box>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 768px)">
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <TabsCourse
                        style={{
                            width: '60%'
                        }}
                    />
                    <LatestGroupDiscussion
                        style={{
                            width: '34%'
                        }}
                    />
                </Box>
            </MediaQuery>
        </div>
    );
};

BodyCourseMeta.propTypes = {};

export default BodyCourseMeta;
