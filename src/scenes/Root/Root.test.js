import React from 'react';
import ReactDOM from 'react-dom';

import Root from './index.js';

describe('Root Component', () => {
  it('should render the root component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Root />, div);
  });
});
