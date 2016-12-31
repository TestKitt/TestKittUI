import React, { PropTypes } from 'react'
import TestCaseSidebar from '../TestCaseSidebar'
import TestCaseView from '../TestCaseView'
import { Tab, Tabs } from 'react-toolbox/lib/tabs'

export const ProjectOverview = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  handleTabChange = (index) => {
    this.setState({ index })
  }

  render() {
    return (
      <div>
        <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
          <Tab label="Tests">
            {
              this.props.activeTestCase && <div>
                <TestCaseView id={this.props.activeTestCase.id} name={this.props.activeTestCase.name} />
                <TestCaseSidebar />
              </div>
            }
            {
              !this.props.activeTestCase && <div className="container">
                <TestCaseSidebar fullWidth />
              </div>
            }
          </Tab>
          <Tab label="Page Objects">
          </Tab>
          <Tab label="Workflows">
          </Tab>
          <Tab label="Details">
          </Tab>
        </Tabs>
      </div>
    )
  }
}

ProjectOverview.propTypes = {
  activeTestCase: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
}

export default ProjectOverview
