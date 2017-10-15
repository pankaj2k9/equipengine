import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import List, { ListRow, ListRowLeft, ListRowRight } from 'base_components/List';
import LinkButton from 'base_components/LinkButton';
import iconPlayButton from './play-button.svg';
import './styles.css';

const ItemListTutorials = ({ tutorials }) => {
  const listOfTutorials = tutorials.map(tutorial => (
    <ListRow key={tutorial.tutorialId}>
      <ListRowLeft>
        <img src={iconPlayButton} alt="Play button icon" />
        <div>
          <p>{tutorial.title}</p>
          <p>{tutorial.video.length}</p>
        </div>
      </ListRowLeft>
      <ListRowRight>
        {/* for mobile viewport */}
        <MediaQuery query="(max-width: 767px)">
          <LinkButton url="/tutorials" text="View" />
        </MediaQuery>
        {/* for desktop viewport */}
        <MediaQuery query="(min-width: 768px)">
          <LinkButton
            style={{
              width: 104
            }}
            url="/tutorials"
            text="View"
          />
        </MediaQuery>
      </ListRowRight>
    </ListRow>
  ));

  return <List className="ItemListTutorials">{listOfTutorials}</List>;
};

ItemListTutorials.propTypes = {
  tutorials: PropTypes.array.isRequired
};

export default ItemListTutorials;
