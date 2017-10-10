import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const RowData = ({ userName, date, message }) => {
  return (
    <li className="RowData">
      <div className="RowData__avatar">
        <img src="" alt="" />
      </div>
      <div className="RowData__info">
        <div className="RowData__info__header">
          <p>{userName}</p>
          <span>{date}</span>
        </div>
        <div className="RowData__info__body">
          <p>{message}</p>
        </div>
      </div>
    </li>
  );
};

RowData.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default RowData;
