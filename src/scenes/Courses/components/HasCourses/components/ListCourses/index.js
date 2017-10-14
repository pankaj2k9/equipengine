import React from 'react';
import PropTypes from 'prop-types';

import Box from 'base_components/Box';
import TutorialsCompleted from './components/TutorialsCompleted';
import LinkButton from 'base_components/LinkButton';
import List, { ListRow, ListRowLeft, ListRowRight } from 'base_components/List';

import './styles.css';

const ListCourses = ({ courses }) => {
    const listCourses = courses.map((course, i) => {
        return (
            <ListRow key={i}>
                <ListRowLeft>
                    <p>{course.title}</p>
                    <p>{course.subtitle}</p>
                </ListRowLeft>
                <ListRowRight className="ListCourses__right">
                    <TutorialsCompleted />
                    <LinkButton text="View" url={'/courses/' + course.id} />
                </ListRowRight>
            </ListRow>
        );
    });
    return (
        <List className="ListCourses">
            <Box>{listCourses}</Box>
        </List>
    );
};

ListCourses.propTypes = {
    courses: PropTypes.array
};

export default ListCourses;
