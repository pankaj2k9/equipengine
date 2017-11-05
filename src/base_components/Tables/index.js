import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import TableRow from './components/TableRow';
import './styles.css';

const Tables = ({ children, className }) => {
  return (
    <Table className={`Tables ${className}`} responsive>
      {children}
    </Table>
  );
};

Tables.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string
};

export { Tables as default, TableRow };
