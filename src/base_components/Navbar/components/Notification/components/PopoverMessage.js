import React from 'react';
import IconMessage from 'react-icons/lib/fa/envelope';
import Popover from 'base_components/Popover';
import RowData from './RowData';

const PopoverMessage = () => {
  // compose our content in here
  const notiRowData = (
    <ul>
      <RowData
        userName="John Jones"
        date="22 Sep 4:00pm"
        message="Hi, Jane can you send me question I asked for the other day when you…"
      />
      <RowData
        userName="John Jones"
        date="22 Sep 4:00pm"
        message="Hi, Jane can you send me question I asked for the other day when you…"
      />
    </ul>
  );
  return (
    <Popover
      buttonIcon={<IconMessage />}
      buttonStyle={{
        marginLeft: 10
      }}
      popoverContent={notiRowData}
      dataCount={12}
    />
  );
};

export default PopoverMessage;
