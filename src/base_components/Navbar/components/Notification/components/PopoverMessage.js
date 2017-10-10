import React from 'react';
import PropTypes from 'prop-types';

import IconMessage from 'react-icons/lib/fa/envelope';
import Popover from 'base_components/Popover';
import RowData from './RowData';

const PopoverMessage = ({ messageRowData }) => {
  return (
    <Popover
      buttonIcon={<IconMessage />}
      buttonStyle={{
        marginLeft: 10
      }}
      popoverContent={messageRowData}
      dataCount={12}
    />
  );
};

PopoverMessage.propTypes = {
  messageRowData: PropTypes.element
};

export default PopoverMessage;
