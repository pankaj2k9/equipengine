import React from 'react';
import PropTypes from 'prop-types';

import TutorialTaskPanel from './TutorialTaskPanel';
import QuestionPanelContent from './QuestionPanelContent';
const TutorialQuestionsGroup = () => {
  return (
    <div>
      <TutorialTaskPanel
        category="Question"
        title="Do you agree with the statement that “absolutes are no longer popular” in our society? Give some examples from your own experience."
      >
        <QuestionPanelContent />
      </TutorialTaskPanel>
    </div>
  );
};

TutorialQuestionsGroup.propTypes = {};

export default TutorialQuestionsGroup;
