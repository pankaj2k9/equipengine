import React from 'react';
import PropTypes from 'prop-types';

const ListDiscussion = ({ discussions }) => {
    if (discussions.length) {
        return <ul />;
    }
    // no discussions
    return (
        <p
            style={{
                color: '#CECECE',
                fontSize: 14
            }}
        >
            No discussion to show
        </p>
    );
};

ListDiscussion.propTypes = {
    discussions: PropTypes.array.isRequired
};

export default ListDiscussion;
