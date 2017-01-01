import React, { PropTypes } from 'react'
import { TestCaseList } from '../TestCaseList'
import InterstitialMessage from 'components/InterstitialMessage'
import TestCaseForm from '../../forms/TestCaseForm'
import style from './TestCaseSidebar.scss'

export const TestCaseSidebar = (props) => (
  <aside className={`${style.sidebar} ${props.fullWidth ? style.full_width : null}`} >
    {
      props.testCases.length > 0 && <TestCaseList />
    }

    {
      props.testCases.length === 0 && <InterstitialMessage
        image="https://d13yacurqjgara.cloudfront.net/users/37530/screenshots/2485318/no-results.png"
        message="You don't have any test cases yet"
      />
    }

    <TestCaseForm buttonClass={style.button} />
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
