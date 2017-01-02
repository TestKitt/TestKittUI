import { connect } from 'react-redux'
import ProjectDetails from '../components/ProjectDetails'
import { deleteProject } from '../modules/projects'

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: () => dispatch(deleteProject('586a1bc40913d7af5e30d87c')) // TODO REMOVE OBVIOUSLY
  }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
