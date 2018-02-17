import React from 'react';
import PropTypes from 'prop-types';
import {
  Popover as BootstrapPopover,
  OverlayTrigger,
  Badge
} from 'react-bootstrap';

import './styles.css';

const Popover = ({
  popoverContentElement,
  positionLeft,
  buttonIcon,
  buttonStyle,
  dataCount
}) => {
  // this is our popover container
  const popoverContainerElement = (
    <BootstrapPopover className="Popover" id="popover-trigger-click-root-close">
      <div className="Popover__content">{popoverContentElement}</div>
    </BootstrapPopover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      rootClose
      placement="bottom"
      overlay={popoverContainerElement}
      positionLeft={200}
    >
      <button className="Popover__button" type="button" style={buttonStyle}>
        {buttonIcon}
        {dataCount && <Badge className="Popover__button__badge">10</Badge>}
      </button>
    </OverlayTrigger>
  );
};

Popover.propTypes = {
  popoverContentElement: PropTypes.element.isRequired,
  dataCount: PropTypes.number,
  positionLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Popover;
