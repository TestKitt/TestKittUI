import React, { PropTypes } from 'react'
import style from './TestCaseView.scss'
import { Tab, Tabs } from 'react-toolbox/lib/tabs'
import Canvas from '../../containers/CanvasContainer'
import DataManager from '../../containers/DataManagerContainer'
import TestCaseForm from '../../forms/TestCaseForm'

export const TestCaseView = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  handleTabChange = (index) => {
    this.setState({ index })
  }

  render () {
    const { id, name, steps, runHistory } = this.props
    return (
      <div className={style.test_case}>
        <h5>{id} {name}</h5>
        <Tabs index={this.state.index} onChange={this.handleTabChange}>
          <Tab label="Details">
            <TestCaseForm />
          </Tab>
          <Tab label="Steps">
            <Canvas steps={steps} />
          </Tab>
          <Tab label="Data">
            <DataManager data={[]} />
          </Tab>
          <Tab label="History" disabled={runHistory.length === 0}>
            <small>History</small>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

TestCaseView.defaultProps = {
  runHistory: [],
  steps: {}
}

TestCaseView.propTypes = {
  runHistory: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  steps: PropTypes.object
}

export default TestCaseView
