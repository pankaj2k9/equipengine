import React from 'react';
import PropTypes from 'prop-types';

import ListDiscussion from './components/ListDiscussion';

const LatestGroupDiscussions = ({ style }) => {
    return (
        <div style={style}>
            <header
                style={{
                    borderBottom: '1px solid #dadada',
                    paddingBottom: '0.67em',
                    margin: '1.8em 0 1.3em 0',
                    color: '#000'
                }}
            >
                Latest Group Discussions
            </header>
            <ListDiscussion discussions={[]} />
        </div>
    );
};

LatestGroupDiscussions.propTypes = {
    style: PropTypes.object
};

export default LatestGroupDiscussions;
