import React, { Component } from 'react';
import styled from 'styled-components';
import { Panel } from 'react-bootstrap';
import IconRight from 'react-icons/lib/fa/angle-right';
import IconDown from 'react-icons/lib/fa/angle-down';

// we will use this for button of a panel
const ButtonPanel = styled.p`
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 300ms ease-in;
  margin-bottom: 0;
  display: inline-block;

  &:hover {
    color: #338ffc;
  }
`;

const SpanIcon = styled.span`
  font-size: 18px;
  font-weight: 800;
  margin-left: 0.3em;
`;

class CollapsiblePanel extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const { buttonText, children } = this.props;
    const { open } = this.state;

    return (
      <div>
        <ButtonPanel onClick={() => this.setState({ open: !open })}>
          {buttonText}
          {open ? (
            <SpanIcon>
              <IconDown />
            </SpanIcon>
          ) : (
            <SpanIcon>
              <IconRight />
            </SpanIcon>
          )}
        </ButtonPanel>
        <Panel collapsible expanded={this.state.open}>
          {children}
        </Panel>
      </div>
    );
  }
}

export default CollapsiblePanel;
