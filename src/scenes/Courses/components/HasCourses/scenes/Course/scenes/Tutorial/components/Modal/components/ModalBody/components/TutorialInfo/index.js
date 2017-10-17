import React from 'react';

import TutorialDetails from './components/TutorialDetails';
import TutorialThingsToDo from './components/TutorialThingsToDo';

const tutorialInfoContainer = {
  backgroundColor: '#F0F0F0'
};

const TutorialInfo = () => {
  return (
    <div style={tutorialInfoContainer}>
      <TutorialDetails />
      <TutorialThingsToDo />
    </div>
  );
};

export default TutorialInfo;
