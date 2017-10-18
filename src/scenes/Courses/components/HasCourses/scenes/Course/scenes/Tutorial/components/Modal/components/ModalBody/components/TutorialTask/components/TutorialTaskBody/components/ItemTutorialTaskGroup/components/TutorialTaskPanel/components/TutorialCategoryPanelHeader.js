import React from 'react';

// for button
import Button from 'base_components/Button';
import IconDownload from 'react-icons/lib/fa/download';

import IconArrowRight from 'react-icons/lib/fa/angle-right';
import IconArrowDown from 'react-icons/lib/fa/angle-down';
import Interactive from 'react-interactive';

const TutorialCategoryPanelHeader = ({
  isReadingGroup,
  isPanelOpen,
  category,
  title,
  handleTogglePanel
}) => {
  const {
    container,
    firstP,
    secondP,
    icon,
    downloadButton
  } = tutorialCategoryPanelHeaderStyle;
  return (
    <div style={container} className="TutorialCategoryPanelHeader">
      <div>
        <p style={firstP}>{category}</p>
        <Interactive
          as="p"
          hover={{ color: '#338FFC' }}
          onStateChange={this.handleInteractiveStateChange}
          onClick={handleTogglePanel}
          style={secondP}
        >
          {title}
        </Interactive>
        {isReadingGroup && (
          <Button style={downloadButton} text="Download">
            <span>
              <IconDownload style={downloadButton.span} />
            </span>
          </Button>
        )}
      </div>
      {isPanelOpen ? (
        <span>
          <IconArrowDown style={icon} onClick={handleTogglePanel} />
        </span>
      ) : (
        <span>
          <IconArrowRight style={icon} onClick={handleTogglePanel} />
        </span>
      )}
    </div>
  );
};

const tutorialCategoryPanelHeaderStyle = {
  container: {
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  firstP: {
    color: '#9FA6AD',
    marginBottom: '0.8em',
    cursor: 'pointer',
    transition: 'all 300ms ease-in'
  },
  secondP: {
    fontSize: 16,
    color: '#111111',
    marginBottom: 0,
    maxWidth: 600
  },
  icon: {
    fontSize: '1.2rem',
    color: '#6c6c6c',
    cursor: 'pointer'
  },
  downloadButton: {
    background: '#ffffff',
    border: '1px solid #d4d4d4',
    color: '#c9c9c9',
    marginTop: '0.6em',
    span: {
      marginLeft: '0.5em'
    }
  }
};

export default TutorialCategoryPanelHeader;
