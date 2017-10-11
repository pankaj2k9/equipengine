import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as TabBootstrap } from 'react-bootstrap';

import './styles.css';

const Tabs = ({ children }) => {
  return (
    <TabBootstrap
      className="Tabs"
      defaultActiveKey={1}
      id="uncontrolled-tab-example"
    >
      {children}
    </TabBootstrap>
  );
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Tabs;
