import React from 'react'
import { Link as RouterLink } from 'react-router'
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import ProjectList from './ProjectList'
import style from './AllProjectsView.scss'
import CreateProjectForm from '../containers/CreateProjectContainer'

export const AllProjectsView = () => (
  <div className="container">
      <ProjectList/>
      <CreateProjectForm/>
  </div>
)

export default AllProjectsView
