import React, { PropTypes } from 'react'
import { ProjectList } from '../ProjectList'
import CreateProjectForm from '../../forms/CreateProjectForm'
import InterstitialMessage from '../../../../components/InterstitialMessage'
import { Button } from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'

export const AllProjectsView = (props) => {
  const { projects, showForm, closeForm, isAddProjectFormShown } = props
  return (
    <div className="container">
      <Button icon="add" onClick={showForm} label="Add New Project" flat primary />
      <Dialog
        actions={[
          { label: 'Cancel', onClick: closeForm },
          { label: 'Save', onClick: () => {} }
        ]}
        active={isAddProjectFormShown}
        onEscKeyDown={closeForm}
        onOverlayClick={closeForm}
        title="Add a New Project"
      >
        <CreateProjectForm />
      </Dialog>
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
  isAddProjectFormShown: PropTypes.bool.isRequired,
  showForm: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired
}

AllProjectsView.defaultProps = {
  projects: []
}

export default AllProjectsView
