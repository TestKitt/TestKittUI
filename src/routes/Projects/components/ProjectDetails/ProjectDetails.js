import React, { PropTypes } from 'react'
import ProjectForm from '../../forms/ProjectForm'
import { Button } from 'react-toolbox/lib/button'

export const ProjectDetails = ({ id, name, description, imageUrl, deleteProject }) => {
  return (
    <div className="container">
      <ProjectForm
        id={id}
        name={name}
        description={description}
        imageUrl={imageUrl}
      />
      <Button className="btn-danger" raised accent label="Delete Project" onClick={() => deleteProject()} />
    </div>
  )
}

ProjectDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  deleteProject: PropTypes.func.isRequired
}

ProjectDetails.defaultProps = {
}

export default ProjectDetails
