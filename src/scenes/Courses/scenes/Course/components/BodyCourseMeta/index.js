import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

import Box from 'base_components/Box';
import TabsCourse from './components/TabsCourse';
import LatestGroupDiscussion from './components/LatestGroupDiscussions';

const BodyCourseMeta = ({ course }) => {
  return (
    <div>
      {/* this is the layout for 0-767px width */}
      <MediaQuery query="(max-device-width: 767px)">
        <Box>
          <TabsCourse course={course} />
          <LatestGroupDiscussion />
        </Box>
      </MediaQuery>
      {/* this is the layout for 767px and up width */}
      <MediaQuery query="(min-device-width: 768px)">
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <TabsCourse
            course={course}
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

BodyCourseMeta.propTypes = {
  course: PropTypes.object.isRequired
};

export default BodyCourseMeta;
