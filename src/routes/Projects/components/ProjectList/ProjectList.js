import React from 'react'
import ProjectListItem from './ProjectListItem'
import { List, ListSubHeader } from 'react-toolbox/lib/list'

export const ProjectList = () => (
  <List selectable ripple>
    <ListSubHeader caption="Your Projects" />
    <ProjectListItem />
  </List>
)

export default ProjectList
