import React, { PropTypes } from 'react'
import { ProjectList } from '../ProjectList'
import CreateProjectForm from '../../forms/CreateProjectForm'
import InterstitialMessage from 'components/InterstitialMessage'
import LoadingMessage from 'components/LoadingMessage'

export const AllProjectsView = (props) => {
  const { projects, fetching } = props

  if (fetching) {
    return <LoadingMessage message="Loading projects..." />
  }

  return (
    <div className="container">
      <CreateProjectForm />
      {
        projects.length > 0 && <ProjectList projects={projects} />
      }

      {
        projects.length === 0 && <InterstitialMessage
          image="https://d13yacurqjgara.cloudfront.net/users/37530/screenshots/2485318/no-results.png"
          message="You don't have any projects yet"
        />
      }
    </div>
  )
}

AllProjectsView.propTypes = {
  projects: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired
}

AllProjectsView.defaultProps = {
  projects: []
}

export default AllProjectsView
