import React from 'react';

import ModalBox from '../../../../../ModalBox.js';
// icon on things to do list
import questionsSrc from './question.svg';
import assignmentSrc from './assignment.svg';
import mediaSrc from './media.svg';
import quizSrc from './quiz.svg';

const TutorialThingsToDo = () => (
  <ModalBox
    style={thingsToDoStyle.container}
    className="TutorialInfo__thingsToDo"
  >
    <header>
      <h5 style={thingsToDoStyle.headline}>Things to do</h5>
    </header>
    <ul style={thingsToDoStyle.list}>
      <li style={thingsToDoStyle.list.row}>
        <img
          alt="Questions img"
          src={questionsSrc}
          style={thingsToDoStyle.list.row.img}
        />
        <span style={thingsToDoStyle.list.row.span}>4 x Questions</span>
      </li>
      <li style={thingsToDoStyle.list.row}>
        <img
          alt="Assignment img"
          src={assignmentSrc}
          style={thingsToDoStyle.list.row.img}
        />
        <span style={thingsToDoStyle.list.row.span}>2 x Assignment</span>
      </li>
      <li style={thingsToDoStyle.list.row}>
        <img
          alt="Media img"
          src={mediaSrc}
          style={thingsToDoStyle.list.row.img}
        />
        <span style={thingsToDoStyle.list.row.span}>1 x Media</span>
      </li>
      <li style={thingsToDoStyle.list.row}>
        <img
          alt="Quiz img"
          src={quizSrc}
          style={thingsToDoStyle.list.row.img}
        />
        <span style={thingsToDoStyle.list.row.span}>1 x Quiz</span>
      </li>
    </ul>
    <footer>
      <form style={thingsToDoStyle.form} action="">
        <input name="complete" type="checkbox" value="" />
        <label style={thingsToDoStyle.form.label} htmlFor="complete">
          Mark as complete
        </label>
      </form>
    </footer>
  </ModalBox>
);

const thingsToDoStyle = {
  container: {
    flexDirection: 'column'
  },
  headline: {
    margin: '20px 0px 20px',
    fontSize: '0.89rem',
    fontWeight: 800,
    color: '#4e4e4e'
  },
  list: {
    marginBottom: '1.18rem',
    row: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.3em',
      img: {
        marginRight: '0.8em',
        marginBottom: '0.2em'
      },
      span: {
        color: '#4E4E4E'
      }
    }
  },
  form: {
    marginBottom: '1.18em',
    display: 'flex',
    label: {
      marginLeft: '0.8em',
      fontSize: 12,
      fontWeight: 400,
      color: '#4e4e4e'
    }
  }
};

export default TutorialThingsToDo;
