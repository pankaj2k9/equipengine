import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import './styles.css';

const CollapsibleHeaderCoursePanel = ({ isOpen }) => {
    return (
        <div className="CollapsibleHeaderCoursePanel">
            <Panel collapsible expanded={isOpen}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
            </Panel>
        </div>
    );
};

CollapsibleHeaderCoursePanel.propTypes = {
    isOpen: PropTypes.bool.isRequired
};

export default CollapsibleHeaderCoursePanel;
