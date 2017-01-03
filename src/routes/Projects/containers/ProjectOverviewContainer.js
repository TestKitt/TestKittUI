import { connect } from 'react-redux'
import ProjectOverview from '../components/ProjectOverview'

const mapDispatchToProps = {
}

const mapStateToProps = (state, props) => ({
  project: state.projects.projects.find((project) => project._id === props.params.id),
  testCases: state.tests.testsByProjectId[props.params.id]
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOverview)
