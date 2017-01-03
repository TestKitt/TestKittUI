import React, { PropTypes } from 'react'
import TestCaseSidebar from '../TestCaseSidebar'
import TestCaseView from '../TestCaseView'
import { Tab, Tabs } from 'react-toolbox/lib/tabs'
import Alert from 'components/Alert'
import InterstitialMessage from 'components/InterstitialMessage'
import managesTabs from 'hocs/managesTabs'
import ProjectDetails from '../../containers/ProjectDetailsContainer'

let ProjectOverview = (props) => {
  const { activeTestCase, handleTabChange, activeTab, project, testCases } = props

  if (!project) {
    return (
      <InterstitialMessage
        image="/broken.png"
        message="Could not load project. Does it exist?"
      />
    )
  }

  return (
    <div>
      <Tabs index={activeTab} onChange={handleTabChange} fixed>
        <Tab label="Tests">
          {
              testCases.length > 0  && <div>
                <TestCaseView/>
                <TestCaseSidebar
                  testCases={testCases}
                />
              </div>
            }
          {
              testCases.length === 0 && <div className="container">
                <TestCaseSidebar
                  testCases={testCases}
                  fullWidth
                />
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
        <Tab label="Project Details">
          <ProjectDetails
            id={props.project._id}
            name={props.project.name}
            description={props.project.description}
            imageUrl={props.project.image_url}
          />
        </Tab>
      </Tabs>
    </div>
  )
}

ProjectOverview.propTypes = {
  activeTestCase: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  testCases: PropTypes.array,
  project: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired,
  activeTab: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired
}

ProjectOverview.defaultProps = {
  testCases: []
}

ProjectOverview = managesTabs(ProjectOverview)

export default ProjectOverview
