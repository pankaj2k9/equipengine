import React from 'react';

import TableDiscussions from './components/TableDiscussions';
import Thread from './components/Thread';

const ItemTableGroupDiscussions = ({ className }) => (
  <div>
    <Thread />
    <TableDiscussions />
  </div>
);

export default ItemTableGroupDiscussions;
