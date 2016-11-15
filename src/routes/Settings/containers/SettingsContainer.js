import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/settings'
import Settings from '../components/Settings'

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
