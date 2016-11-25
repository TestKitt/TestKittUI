import React, { PropTypes } from 'react'
import ProjectListItem from './ProjectListItem'
import { List, ListSubHeader } from 'react-toolbox/lib/list'

let ProjectList = (props) => (
  <List selectable ripple>
    <ListSubHeader caption="Your Projects" />
    {
      props.projects.map((project, index) => <ProjectListItem
        key={index}
        id={project._id}
        name={project.name}
        description={project.description}
        imageUrl={project.image_url}
        lastRunResult={project.lastRun}
      />)
    }
  </List>
)

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectList
