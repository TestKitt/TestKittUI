import React, { PropTypes } from 'react'
import { ProjectList } from '../ProjectList'
import CreateProjectForm from '../../forms/CreateProjectForm'
import InterstitialMessage from '../../../../components/InterstitialMessage'

export const AllProjectsView = (props) => {
  const { projects } = props
  return (
    <div className="container">
      {
        projects.length > 0 && <ProjectList projects={projects} />
      }

      {
        projects.length === 0 && <InterstitialMessage
          image="http://www.reactrally.com/assets/dist/img/ReactLogo.svg"
          message="Create your first project using the form below"
        />
      }
      <CreateProjectForm />
    </div>
  )
}

AllProjectsView.propTypes = {
  projects: PropTypes.array.isRequired
}

AllProjectsView.defaultProps = {
  projects: []
}

export default AllProjectsView
