import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import './styles.css';

const CollapsibleHeaderCoursePanel = ({ description, isOpen }) => {
  return (
    <div className="CollapsibleHeaderCoursePanel">
      <Panel collapsible expanded={isOpen}>
        {description}
      </Panel>
    </div>
  );
};

CollapsibleHeaderCoursePanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
};

export default CollapsibleHeaderCoursePanel;
