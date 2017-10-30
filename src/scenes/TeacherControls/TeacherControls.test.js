import React from 'react';
import { shallow, mount } from 'enzyme';
import TeacherControls, { FilterableTableCourse } from './index.js';

describe('TeacherControls Scene', () => {
  let teacherControlsWrapper;
  let courses;

  beforeEach(() => {
    // instantiating the courses array.
    courses = ['itlog'];
    // we will use this wrapper in some of our test files.
    teacherControlsWrapper = shallow(<TeacherControls courses={courses} />);
  });

  it('renders without throwing an error.', () => {
    const wrapper = mount(<TeacherControls courses={courses} />);
  });

  it('has a child component FilterableTableCourse with a passed props courses', () => {
    expect(teacherControlsWrapper).toContainReact(
      <FilterableTableCourse courses={courses} />
    );
  });

  it('should have a props named courses which is not undefined', () => {
    expect(teacherControlsWrapper).toHaveProp('courses');

    expect(teacherControlsWrapper.props().courses).not.toBe(undefined);
  });
});
