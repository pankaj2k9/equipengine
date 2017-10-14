import React from 'react';

import Download from 'base_components/Download';
import Table, { TableRow } from 'base_components/Tables';
import iconDownload from './download.svg';
import MediaQuery from 'react-responsive';

const ItemTableTutorialsFile = () => {
    return (
        <Table>
            <thead>
                <TableRow>
                    <th>Name</th>
                    <th>Date Added</th>
                    <th />
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                    <td>Submissions instructions.pdf</td>
                    <td>22 April 17</td>
                    <td>
                        <div
                            style={{
                                display: 'inline'
                            }}
                        >
                            <MediaQuery query="(min-device-width: 768px)">
                                <Download />
                            </MediaQuery>
                            <img
                                style={{ cursor: 'pointer' }}
                                alt=""
                                src={iconDownload}
                            />
                        </div>
                    </td>
                </TableRow>
            </tbody>
        </Table>
    );
};

ItemTableTutorialsFile.propTypes = {};

export default ItemTableTutorialsFile;
