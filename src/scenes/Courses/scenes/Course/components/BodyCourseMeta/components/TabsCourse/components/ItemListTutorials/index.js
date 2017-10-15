import React from 'react';
import PropTypes from 'prop-types';

import List, { ListRow, ListRowLeft, ListRowRight } from 'base_components/List';
import Button from 'base_components/Button';
import iconPlayButton from './play-button.svg';
import './styles.css';

const ItemListTutorials = ({ tutorials }) => {
  const listOfTutorials = tutorials.map((tutorial, i) => (
    <ListRow key={i}>
      <ListRowLeft>
        <img src={iconPlayButton} alt="Play button icon" />
        <div>
          <p>{tutorial.title}</p>
          <p>{tutorial.video.length}</p>
        </div>
      </ListRowLeft>
      <ListRowRight>
        <Button text="View" />
      </ListRowRight>
    </ListRow>
  ));

  return <List className="ItemListTutorials">{listOfTutorials}</List>;
};

ItemListTutorials.propTypes = {
  tutorials: PropTypes.array.isRequired
};

export default ItemListTutorials;
