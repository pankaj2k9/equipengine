import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { withRouter } from 'react-router-dom';

import List, { ListRow, ListRowLeft, ListRowRight } from 'base_components/List';
import LinkButton from 'base_components/LinkButton';
import iconPlayButton from './play-button.svg';
import './styles.css';

const ItemListTutorials = ({ tutorials, match }) => {
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
        <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              <LinkButton
                url={`${match.url}/tutorials/${tutorial.id}`}
                text="View"
              />
            ) : (
              <LinkButton
                style={{
                  width: 104
                }}
                url={`${match.url}/tutorials/${tutorial.id}`}
                text="View"
              />
            )}
        </Media>
      </ListRowRight>
    </ListRow>
  ));

  return (
    <div>
      <List className="ItemListTutorials">{listOfTutorials}</List>
    </div>
  );
};

ItemListTutorials.propTypes = {
  tutorials: PropTypes.array.isRequired
};

export default withRouter(ItemListTutorials);
