import React from 'react'
import TestCaseList from './TestCaseList'
import AddNewTestCaseButton from './AddNewTestCaseButton'
import style from './TestCaseSidebar.scss'

export const TestCaseSidebar = () => (
  <aside className={style.sidebar} >
    <TestCaseList />
    <AddNewTestCaseButton />
  </aside>
)

export default TestCaseSidebar
