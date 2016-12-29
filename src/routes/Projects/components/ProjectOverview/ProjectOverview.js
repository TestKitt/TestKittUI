import React, { PropTypes } from 'react'
import TestCaseSidebar from '../TestCaseSidebar'
import TestCaseView from '../TestCaseView'

export const ProjectOverview = (props) => {
  if (!props.activeTestCase) {
    return (
      <div className="container">
        <TestCaseSidebar fullWidth />
      </div>
    )
  }

  return (
    <div>
      <TestCaseView id={props.activeTestCase.id} name={props.activeTestCase.name} />
      <TestCaseSidebar />
    </div>
  )
}

ProjectOverview.propTypes = {
  activeTestCase: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
}

export default ProjectOverview
