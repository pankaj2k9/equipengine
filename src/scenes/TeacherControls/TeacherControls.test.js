import React from 'react';
import { shallow, mount } from 'enzyme';
import TeacherControls from './index.js';

describe('TeacherControls Scene', () => {
  it('renders without blowing ->> Full rendering.', () => {
    const wrapper = mount(<TeacherControls />);
  });
  // Smoke Test -->> If we flip this thing on, will it catch fire and start producing smoke?
  it('renders without blowing ->> Isolated rendering', () => {
    const wrapper = shallow(<TeacherControls />);
  });
});
