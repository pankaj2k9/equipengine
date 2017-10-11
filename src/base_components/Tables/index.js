import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import TableRow from './components/TableRow';
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

export { Tables as default, TableRow };
