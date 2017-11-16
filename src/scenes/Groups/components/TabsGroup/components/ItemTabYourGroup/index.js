import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isEmpty, map } from 'ramda';

import ListItemGroup from '../ListItemGroup';
import NoGroups from './components/NoGroups';

const ListYourGroup = styled(({ className, yourGroups }) => {
  // create list your group items
  const listItemYourGroup = map(group => {
    return (
      <ListItemGroup
        isSelected={group.isSelected}
        key={group.id}
        group={group}
      />
    );
  }, yourGroups);

  return <ul className={className}>{listItemYourGroup}</ul>;
})``;

const ItemTabYourGroup = ({ yourGroups }) => {
  if (isEmpty(yourGroups)) {
    return <NoGroups />;
  }

  // else
  return <ListYourGroup yourGroups={yourGroups} />;
};

ItemTabYourGroup.propTypes = {
  yourGroups: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemTabYourGroup;
