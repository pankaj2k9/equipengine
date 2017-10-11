import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import './styles.css';

const Tables = ({ children }) => {
  return (
    <Table className="Tables" responsive>
      {children}
    </Table>
  );
};

Tables.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export const TableRow = ({ children }) => {
  return <tr className="Tables__row">{children}</tr>;
};

TableRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Tables;

/* <thead>
 *     <TableRow>
 *         <th>#</th>
 *         <th>Table heading</th>
 *         <th>Table heading</th>
 *         <th>Table heading</th>
 *     </TableRow>
 * </thead>
 * <tbody>
 *     <TableRow>
 *         <td>1</td>
 *         <td>Table cell</td>
 *         <td>Table cell</td>
 *         <td>Table cell</td>
 *     </TableRow>
 *     <TableRow>
 *         <td>1</td>
 *         <td>Table cell</td>
 *         <td>Table cell</td>
 *         <td>Table cell</td>
 *     </TableRow>                
 * </tbody>*/
