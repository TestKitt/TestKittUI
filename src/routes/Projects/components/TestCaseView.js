import React from 'react'
import style from './TestCaseView.scss'
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import PageTitle from '../../../components/PageTitle';

export const TestCaseView = () => (
  <div className={style["test-case"]}>
      <PageTitle text="TC01 Valid Login"/>
      <Tabs>
          <Tab label='Steps'>
              <small>Steps</small>
          </Tab>
          <Tab label='Data'>
              <small>Data</small>
          </Tab>
          <Tab label='History' disabled>
              <small>History</small>
          </Tab>
      </Tabs>
  </div>
)

export default TestCaseView
