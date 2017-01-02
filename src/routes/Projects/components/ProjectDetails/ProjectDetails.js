import React, { PropTypes } from 'react'
import ProjectForm  from '../../forms/ProjectForm'
import { Button } from 'react-toolbox/lib/button'

export const ProjectDetails = (props) => {
  return (
    <div className="container">
      <ProjectForm/>
      <Button raised label="Delete Project" onClick={() => props.deleteProject()} />
    </div>
  )
}

ProjectDetails.propTypes = {
  id: PropTypes.string.isRequired,
  project: PropTypes.object,
  deleteProject: PropTypes.func.isRequired
}

ProjectDetails.defaultProps = {
}

export default ProjectDetails
