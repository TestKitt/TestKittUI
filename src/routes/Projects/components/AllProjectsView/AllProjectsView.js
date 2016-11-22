import React from 'react'
import { ProjectList } from '../ProjectList'
import CreateProjectForm from '../../forms/CreateProjectForm'

export const AllProjectsView = () => (
  <div className="container">
    <ProjectList />
    <CreateProjectForm />
  </div>
)

export default AllProjectsView
