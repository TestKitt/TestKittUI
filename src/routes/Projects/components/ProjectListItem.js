import React from 'react'
import { Link as RouterLink } from 'react-router'
import { ListItem } from 'react-toolbox/lib/list'
import style from './ProjectListItem.scss'
import image from '../assets/reed-logo.png'

export const ProjectListItem = () => (
  <div>
    <RouterLink to="projects/1" >
      <ListItem
        avatar={image}
        caption="Reed.co.uk Frontend"
        legend={<span>Last Run: <span className="text-success">Pass</span></span>}
        className={`${style.project} ${style.success}`}
      />
    </RouterLink>
  </div>
)

export default ProjectListItem
