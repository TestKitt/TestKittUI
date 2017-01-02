import { connect } from 'react-redux'
import ProjectDetails from '../components/ProjectDetails'
import { deleteProject } from '../modules/projects'

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteProject: () => dispatch(deleteProject(props.id))
  }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
