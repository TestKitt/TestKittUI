import React, { PropTypes } from 'react'
import TestCaseSidebar from '../TestCaseSidebar'
import TestCaseView from '../TestCaseView'
import { Tab, Tabs } from 'react-toolbox/lib/tabs'
import Alert from 'components/Alert'
import managesTabs from 'hocs/managesTabs'

let ProjectOverview = (props) => {
  const { activeTestCase, handleTabChange, activeTab } = props
  return (
    <div>
      <Tabs index={activeTab} onChange={handleTabChange} fixed>
        <Tab label="Tests">
          {
              activeTestCase && <div>
                <TestCaseView id={activeTestCase.id} name={activeTestCase.name} />
                <TestCaseSidebar />
              </div>
            }
          {
              !activeTestCase && <div className="container">
                <TestCaseSidebar fullWidth />
              </div>
            }
        </Tab>
        <Tab label="Page Objects">
          <Alert
            title="Page Objects"
            text="represent pages in in your application and expose elements
            and properties which you can interact with in your test"
            type="plain"
          />
        </Tab>
        <Tab label="Workflows">
          <Alert
            title="Workflows"
            text="are a collection of interactions of interactions with Page Objects
            which are frequently re-used such as logging in"
            type="plain"
          />
        </Tab>
        <Tab label="Project Details" />
      </Tabs>
    </div>
  )
}

ProjectOverview.propTypes = {
  activeTestCase: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  activeTab: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired
}

ProjectOverview = managesTabs(ProjectOverview)

export default ProjectOverview
