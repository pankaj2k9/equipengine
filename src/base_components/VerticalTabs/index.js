import React, { Component } from "react"

import List from "base_components/List"
import Loading from "base_components/Loading"
import { ActionBar, Layout, Tabs, TabContent } from "./elements"
import Tab from "./Tab"

class VerticalTabs extends Component {
  render() {
    const {
      actionBar,
      content,
      loading,
      selectedTab,
      tabs,
      tabFormatter,
      onTabClick
    } = this.props
    return (
      <Layout>
        <Tabs>
          {actionBar && <ActionBar>{actionBar}</ActionBar>}
          {loading ? (
            <Loading />
          ) : (
            <List>
              {Array.isArray(tabs) &&
                tabs.map((tab, index) => (
                  <Tab
                    key={`${index}-${tab}`}
                    active={tab === selectedTab}
                    tab={tab}
                    tabFormatter={tabFormatter}
                    onTabClick={onTabClick}
                  />
                ))}
            </List>
          )}
        </Tabs>
        <TabContent>{content || "No item selected"}</TabContent>
      </Layout>
    )
  }
}

export default VerticalTabs
