import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DateTime = styled(({ className, date, time }) => (
  <div className={className}>
    <span>{date}</span>
    <span>{time}</span>
  </div>
))`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  color: #7e7e7e;
`;

DateTime.proTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default DateTime;
