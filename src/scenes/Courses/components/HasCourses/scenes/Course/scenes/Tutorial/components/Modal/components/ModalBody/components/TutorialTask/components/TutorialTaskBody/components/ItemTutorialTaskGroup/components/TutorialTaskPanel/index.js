import React from 'react';

// sub-components
import TutorialTaskPanelHeader from './components/TutorialTaskPanelHeader';
import TutorialTaskPanelContent from './components/TutorialTaskPanelContent';

class TutorialTaskPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      isPanelOpen: false
    };
  }
  handleTogglePanel = e => {
    e.preventDefault();
    // update the state
    this.setState({
      isPanelOpen: !this.state.isPanelOpen
    });
  };
  render() {
    const { category, title, children, isReadingGroup } = this.props;
    return (
      <div style={tutorialTaskPanelStyle} className="TutorialTaskPanel">
        <TutorialTaskPanelHeader
          isPanelOpen={this.state.isPanelOpen}
          handleTogglePanel={this.handleTogglePanel}
          category={category}
          title={title}
          isReadingGroup={isReadingGroup}
        />
        <TutorialTaskPanelContent isPanelOpen={this.state.isPanelOpen}>
          {children}
        </TutorialTaskPanelContent>
      </div>
    );
  }
}

const tutorialTaskPanelStyle = {
  border: '1px solid #cbcbcb',
  borderRadius: 4,
  marginBottom: '1em'
};

export default TutorialTaskPanel;
