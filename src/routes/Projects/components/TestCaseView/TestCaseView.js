import React, { PropTypes } from 'react'
import style from './TestCaseView.scss'
import { Tab, Tabs } from 'react-toolbox/lib/tabs'
import Canvas from '../../containers/CanvasContainer'
import DataManager from '../../containers/DataManagerContainer'
import TestCaseForm from '../../forms/TestCaseForm'

export const TestCaseView = (props) => (
  <div className={style['test-case']} >
    <h5>{props.id} {props.name}</h5>
    <Tabs>
      <Tab label="Details">
        <TestCaseForm />
      </Tab>
      <Tab label="Steps">
        <Canvas steps={props.steps} />
      </Tab>
      <Tab label="Data">
        <DataManager />
      </Tab>
      <Tab label="History" disabled={props.runHistory.length === 0 ? 'disabled' : null} >
        <small>History</small>
      </Tab>
    </Tabs>
  </div>
)

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
