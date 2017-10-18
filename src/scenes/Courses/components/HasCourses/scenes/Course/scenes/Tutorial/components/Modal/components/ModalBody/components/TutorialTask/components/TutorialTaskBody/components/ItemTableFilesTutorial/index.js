import React from 'react';
// for item table files
import Download from 'base_components/Download';
import Table, { TableRow } from 'base_components/Tables';
import iconDownload from './download.svg';
import MediaQuery from 'react-responsive';

const ItemTableTutorialFiles = () => {
  // test data
  const files = [
    {
      id: 'ysdjfk',
      file: 'Submissions instructions.pdf',
      date: '22 April 17'
    },
    {
      id: 'yskjdksf',
      file: 'Showing culture.ptt',
      date: '19 March 17'
    }
  ];

  const listOfFiles = files.map(file => (
    <TableRow key={file.id}>
      <td>{file.file}</td>
      <td>{file.date}</td>
      <td>
        <div
          style={{
            display: 'inline'
          }}
        >
          <MediaQuery query="(min-device-width: 768px)">
            <Download />
          </MediaQuery>
          <img style={{ cursor: 'pointer' }} alt="" src={iconDownload} />
        </div>
      </td>
    </TableRow>
  ));
  return (
    <Table>
      <thead>
        <TableRow>
          <th>Name</th>
          <th>Date Added</th>
          <th />
        </TableRow>
      </thead>
      <tbody>{listOfFiles}</tbody>
    </Table>
  );
};

export default ItemTableTutorialFiles;
