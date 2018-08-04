import React, { Component } from "react"
import styled from "styled-components"
import ContainerFlex from "base_components/ContainerFlex"
import { Label, Switch } from "base_components/RootForm"

const GreyPanel = styled.div`
  background: #f3f3f3;
  padding: 1.8em;
  margin-bottom: 2em;

  > div {
    margin-bottom: 1.2em;
  }
`

class NotificationFrequency extends Component {
  handleEmailNotificationsChange = ({ target: { checked } }) => {
    this.props.onChange(
      checked
        ? {
            ...this.props.notificationFrequency,
            emailNotifications: true
          }
        : {
            emailNotifications: false,
            activitySummary: false,
            courseResponse: false,
            groupDiscussion: false,
            privateMessage: false
          }
    )
  }

  handleActivitySummaryChange = () => this.handleConfigChange("activitySummary")
  handleCourseResponseChange = () => this.handleConfigChange("courseResponse")
  handleGroupDiscussionChange = () => this.handleConfigChange("groupDiscussion")
  handlePrivateMessageChange = () => this.handleConfigChange("privateMessage")

  handleConfigChange = configName => {
    const { notificationFrequency } = this.props
    this.props.onChange({
      ...notificationFrequency,
      [configName]: !notificationFrequency[configName]
    })
  }

  render() {
    const {
      activitySummary,
      courseResponse,
      emailNotifications,
      groupDiscussion,
      privateMessage
    } = this.props.notificationFrequency
    return (
      <div>
        <br />
        <ContainerFlex isSpaceBetween>
          <Label>Email notifications</Label>
          <Switch
            value={emailNotifications}
            onChange={this.handleEmailNotificationsChange}
          />
        </ContainerFlex>
        <br />
        <GreyPanel>
          <ContainerFlex isSpaceBetween>
            <b>Frequency</b>
          </ContainerFlex>
          <ContainerFlex isSpaceBetween>
            <Label>You receive a private message</Label>
            <Switch
              value={privateMessage}
              onChange={this.handlePrivateMessageChange}
            />
          </ContainerFlex>
          <ContainerFlex isSpaceBetween>
            <Label>You receive a response in a course</Label>
            <Switch
              value={courseResponse}
              onChange={this.handleCourseResponseChange}
            />
          </ContainerFlex>
          <ContainerFlex isSpaceBetween>
            <Label>You receive a group discussion</Label>
            <Switch
              value={groupDiscussion}
              onChange={this.handleGroupDiscussionChange}
            />
          </ContainerFlex>
          <ContainerFlex isSpaceBetween>
            <Label>Get a weekly summary of activity</Label>
            <Switch
              value={activitySummary}
              onChange={this.handleActivitySummaryChange}
            />
          </ContainerFlex>
        </GreyPanel>
      </div>
    )
  }
}

export default NotificationFrequency
