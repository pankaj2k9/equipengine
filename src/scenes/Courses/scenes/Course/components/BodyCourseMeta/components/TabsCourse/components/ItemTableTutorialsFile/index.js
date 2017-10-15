import React from 'react';
import PropTypes from 'prop-types';

import Download from 'base_components/Download';
import Table, { TableRow } from 'base_components/Tables';
import iconDownload from './download.svg';
import MediaQuery from 'react-responsive';

const ItemTableTutorialsFile = ({ files }) => {
  const listOfFiles = files.map((file, i) => (
    <TableRow key={i}>
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

ItemTableTutorialsFile.propTypes = {
  files: PropTypes.array
};

export default ItemTableTutorialsFile;
