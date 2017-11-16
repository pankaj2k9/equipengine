import React from 'react';
import PropTypes from 'prop-types';
import { identical } from 'ramda';
import styled from 'styled-components';
import IconUser from 'react-icons/lib/fa/user';

import Button from 'base_components/RootButton';

// extend button, select button
const SelectButton = Button.extend`
  width: 146px;
`;

const ListItemGroup = styled(({ className, group }) => {
  return (
    <li className={className}>
      <div>
        <h5>{group.title}</h5>
        <p>
          <span>
            <IconUser />
          </span>
          <span>{`${group.people} people`}</span>
        </p>
        <p>{group.desc}</p>
      </div>
      <div>
        {/* check if the group type is your-group
           if your group type, we need to check if the group is already selected or not.
         */}
        {identical(group.type, 'your-group') ? (
          group.isSelected ? (
            <SelectButton disabled>Selected</SelectButton>
          ) : (
            <SelectButton>Select</SelectButton>
          )
        ) : (
          <Button>Join</Button>
        )}
      </div>
    </li>
  );
})`
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  padding: 2em;
  margin-bottom: 1.2em;
  background-color: ${props => (props.isSelected ? '#F6F6F6' : 'none')};

  div:first-child {
    h5 {
      font-size: 1.01rem;
      color: #111111;
      margin: 0 0 0.3em 0;
    }
    span:first-child {
      margin-right: 0.2em;
    }
    p {
      color: #9fa6ad;
      margin-bottom: 1em;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;

    div:first-child {
      margin-right: 1em;
    }
  }
`;

ListItemGroup.propTypes = {
  group: PropTypes.object.isRequired
};

export default ListItemGroup;
