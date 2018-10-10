import React from "react"
import InfiniteScroll from "react-infinite-scroller"

import List from "base_components/List"
import Loading from "base_components/Loading"
import { ActionBar, Layout, Tabs, TabContent } from "./elements"
import Tab from "./Tab"

const VerticalTabs = ({
  actionBar,
  content,
  loading,
  onTabClick,
  selectedTab,
  tabKey,
  tabs,
  tabFormatter,
  handleLoadMore,
  pagination,
  useWindowScroll
}) => {
  return (
    <Layout>
      <Tabs>
        {actionBar && <ActionBar>{actionBar}</ActionBar>}
        {loading ? (
          <Loading />
        ) : (
          <InfiniteScroll
            pageStart={1}
            loadMore={handleLoadMore}
            hasMore={
              pagination && pagination.total_pages > pagination.current_page
            }
            initialLoad={false}
            useWindow={useWindowScroll ? useWindowScroll : false}
            loader={<Loading />}
          >
            <List>
              {Array.isArray(tabs) &&
                tabs.map((tab, index) => (
                  <Tab
                    key={`${index}-${tab}`}
                    active={tab[tabKey || "id"] === selectedTab}
                    tab={tab}
                    tabFormatter={tabFormatter}
                    onTabClick={onTabClick}
                  />
                ))}
            </List>
          </InfiniteScroll>
        )}
      </Tabs>
      <TabContent>{content || "No item selected"}</TabContent>
    </Layout>
  )
}

export default VerticalTabs
