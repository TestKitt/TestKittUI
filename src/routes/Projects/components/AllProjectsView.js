import React from 'react'
import './AllProjectsView.scss'
import { Button } from 'react-toolbox';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import ProjectList from './ProjectList'

export const AllProjectsView = () => (
  <div className="container">
      <Input type='search' label='Search Projects' icon='search' />
      <ProjectList/>
  </div>
)

export default AllProjectsView
