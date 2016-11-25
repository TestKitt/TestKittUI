import { connect } from 'react-redux'
import { showAddProjectForm, closeAddProjectForm } from '../modules/projects'
import AllProjectsView from '../components/AllProjectsView'

const mapDispatchToProps = {
  showForm : () => showAddProjectForm(),
  closeForm : () => closeAddProjectForm()
}

const mapStateToProps = (state) => ({
  projects: state.projects.projectsById,
  isAddProjectFormShown: state.projects.isAddProjectFormShown
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProjectsView)
