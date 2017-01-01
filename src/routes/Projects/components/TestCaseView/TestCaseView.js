import React, { PropTypes } from 'react'
import style from './TestCaseView.scss'
import { Tab, Tabs } from 'react-toolbox/lib/tabs'
import Canvas from '../../containers/CanvasContainer'
import DataManager from '../../containers/DataManagerContainer'
import managesTabs from 'hocs/managesTabs'

let TestCaseView = (props) => {
  const { id, name, steps, runHistory, handleTabChange, activeTab } = props

  return (
    <div className={style.test_case}>
      <h5>{id} {name}</h5>
      <Tabs index={activeTab} onChange={handleTabChange}>
        <Tab label="Details" />
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

TestCaseView.defaultProps = {
  runHistory: [],
  steps: {}
}

TestCaseView.propTypes = {
  runHistory: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  steps: PropTypes.object,
  activeTab: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired
}

export default managesTabs(TestCaseView)
