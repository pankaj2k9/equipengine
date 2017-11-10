import React from 'react';

import TableDiscussions from './components/TableDiscussions';
import Thread from './components/Thread';

const ItemTableGroupDiscussions = ({ className }) => {
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

  return (
    <div>
      <Thread />
      <TableDiscussions discussions={discussions} />
    </div>
  );
};

export default ItemTableGroupDiscussions;
