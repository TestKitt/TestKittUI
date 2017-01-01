import { connect } from 'react-redux'
import AllProjectsView from '../components/AllProjectsView'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
  fetching: state.projects.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProjectsView)
