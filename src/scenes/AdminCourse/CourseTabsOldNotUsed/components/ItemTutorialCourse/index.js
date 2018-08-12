/** @module ItemTabTutorialCourse */
import React from "react"
// components
import Box from "base_components/Box"
import ListTutorialCourse from "./components/ListTutorialCourse"
import TabsLesson from "./components/TabsLesson"

const ItemTabTutorialCourse = () => (
  <Box>
    <ListTutorialCourse />
    <TabsLesson />
  </Box>
)

export default ItemTabTutorialCourse
