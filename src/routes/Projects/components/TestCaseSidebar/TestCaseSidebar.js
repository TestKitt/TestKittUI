import React from 'react'
import { TestCaseList } from '../TestCaseList'
import { Button } from 'react-toolbox/lib/button'
import style from './TestCaseSidebar.scss'

export const TestCaseSidebar = () => (
  <aside className={style.sidebar} >
    <TestCaseList />
    <Button className={style.button} icon="add" label="Add New Test Case" flat primary />
  </aside>
)

export default TestCaseSidebar
