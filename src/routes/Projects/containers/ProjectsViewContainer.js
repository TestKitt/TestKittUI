import { connect } from 'react-redux'
import AllProjectsView from '../components/AllProjectsView'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  projects: state.projects.projectsById
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProjectsView)
