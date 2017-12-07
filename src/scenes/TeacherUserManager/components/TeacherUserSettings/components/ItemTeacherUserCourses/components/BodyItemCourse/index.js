import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconRight from 'react-icons/lib/fa/angle-right';
import IconDown from 'react-icons/lib/fa/angle-down';

import './styles.css';

// we will use this for button of a panel
const ButtonPanel = styled.p`
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 300ms ease-in;
  margin-bottom: 0;
  display: inline-block;

  &:hover {
    color: #338ffc;
  }
`;

// for span icon.
const SpanIcon = styled.span`
  font-size: 18px;
  font-weight: 800;
  margin-left: 0.3em;
`;

const BodyItemCourse = styled(({ className, isOpenPanel, onToggle }) => (
  <div className={className}>
    <div>
      <span>Enable / Disable</span>
    </div>
    <ButtonPanel onClick={() => onToggle()}>
      View Lessons
      {isOpenPanel ? (
        <SpanIcon>
          <IconDown />
        </SpanIcon>
      ) : (
        <SpanIcon>
          <IconRight />
        </SpanIcon>
      )}
    </ButtonPanel>
  </div>
))`
  > div:first-child{
      display: flex;
      align-items: center;
      color: #9FA6AD;
      margin-bottom: 1.3em
      font-size: 12px;
  }

  @media screen and (min-width: 768px){
    display: flex;
    justify-content: space-between;
  }
`;

BodyItemCourse.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpenPanel: PropTypes.bool.isRequired
};

export default BodyItemCourse;
