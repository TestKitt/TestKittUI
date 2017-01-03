import React, { PropTypes } from 'react'
import { TestCaseList } from '../TestCaseList'
import InterstitialMessage from 'components/InterstitialMessage'
import { TestCaseFormDialog } from '../../forms/TestCaseForm'
import style from './TestCaseSidebar.scss'

// TODO: Active test dispatch
// TODO: Tests cases as props or derive from projectId in container or HoC?
export const TestCaseSidebar = (props) => (
  <aside className={`${style.sidebar} ${props.fullWidth ? style.full_width : null}`} >
    {
      props.testCases.length > 0 && <TestCaseList testCases={props.testCases} />
    }

    {
      props.testCases.length === 0 && <InterstitialMessage
        image="https://d13yacurqjgara.cloudfront.net/users/37530/screenshots/2485318/no-results.png"
        message="You don't have any test cases yet"
      />
    }

    <TestCaseFormDialog
      buttonClass={style.button}
      buttonText="Add New Test Case"
      title="Add a New Test Case"
      projectId="586a9d66656da4cc560600b6"
    />
  </aside>
)

TestCaseSidebar.propTypes = {
  testCases: PropTypes.array.isRequired,
  fullWidth: PropTypes.bool.isRequired
}

TestCaseSidebar.defaultProps = {
  testCases: [],
  fullWidth: false
}

export default TestCaseSidebar
