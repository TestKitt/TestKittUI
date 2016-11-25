import { connect } from 'react-redux'
import { showAddProjectForm, closeAddProjectForm, createProject } from '../modules/projects'
import AllProjectsView from '../components/AllProjectsView'
import { submit } from 'redux-form'

const mapDispatchToProps = {
  showForm : () => showAddProjectForm(),
  closeForm : () => closeAddProjectForm(),
  performSubmit: () => submit('createProject'),
  handleSubmit: (values) => createProject(values)
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
  isAddProjectFormShown: state.projects.isAddProjectFormShown,
  fetching: state.projects.fetching,
  creating: state.projects.creating
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProjectsView)
