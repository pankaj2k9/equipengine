import React from 'react';
import IconBell from 'react-icons/lib/fa/bell';
import Popover from 'base_components/Popover';
import RowData from './RowData';

const PopoverNoti = () => {
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
  return <Popover buttonIcon={<IconBell />} popoverContent={notiRowData} />;
};

export default PopoverNoti;
