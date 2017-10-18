import React from 'react';

// sub-components
import TutorialCategoryPanelHeader from './components/TutorialCategoryPanelHeader';
import TutorialCategoryPanelContent from './components/TutorialCategoryPanelContent';

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
        <TutorialCategoryPanelHeader
          isPanelOpen={this.state.isPanelOpen}
          handleTogglePanel={this.handleTogglePanel}
          category={category}
          title={title}
          isReadingGroup={isReadingGroup}
        />
        <TutorialCategoryPanelContent isPanelOpen={this.state.isPanelOpen}>
          {children}
        </TutorialCategoryPanelContent>
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
