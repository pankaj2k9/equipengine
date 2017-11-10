import React from 'react';
import styled from 'styled-components';

import TableData from './components/TableData';
import TableDataPosted from './components/TableDataPosted';
import TableDataActivity from './components/TableDataActivity';
import Tables, { TableRow } from 'base_components/Tables';

const ItemTableGroupDiscussions = styled(({ className }) => {
  // discussion items.
  const discussions = [
    {
      id: '5f44348jjsfn34234dsfajsdfk',
      name: 'Jon Mcall',
      title: 'How does our culture impact decisions made by the government?',
      activities: [
        {
          name: 'Jane Doe',
          action: 'created a new discussion thread',
          avatarURL:
            'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
          date: {
            day: '2 Sep',
            time: '1:00pm'
          }
        }
      ],
      date: {
        day: '2 Sep',
        time: '1:00pm'
      },
      comments: 4,
      dateAdded: '22 April 17'
    },
    {
      id: '5f44348jjsfn34234dsffhgns',
      name: 'Jon Mcall',
      title: 'Western Sydney Phrases',
      activities: [
        {
          name: 'Jane Doe',
          action: 'created a new discussion thread',
          avatarURL:
            'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
          date: {
            day: '2 Sep',
            time: '1:00pm'
          }
        }
      ],
      date: {
        day: '2 Sep',
        time: '1:00pm'
      },
      comments: 2,
      dateAdded: '22 April 17'
    }
  ];

  const discussionRows = discussions.map(item => (
    <TableRow key={item.id}>
      <TableDataPosted discussion={item} />
      <TableData>{item.dateAdded}</TableData>
      <TableData>{item.comments}</TableData>
      <TableDataActivity activity={item.activities[0]} />
    </TableRow>
  ));

  return (
    <div>
      <Tables>
        <thead>
          <TableRow>
            <th />
            <th>Date Added</th>
            <th>Comment</th>
            <th>Latest Activity</th>
          </TableRow>
        </thead>
        <tbody>{discussionRows}</tbody>
      </Tables>
    </div>
  );
})``;

export default ItemTableGroupDiscussions;
