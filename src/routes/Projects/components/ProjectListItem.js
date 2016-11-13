import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Button } from 'react-toolbox';
import style from './ProjectListItem.scss'
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';

export const ProjectListItem = () => (
  <div>
      <List selectable ripple>
          <ListSubHeader caption='Your Projects' />
          <ListItem
              avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
              caption='Reed.co.uk Frontend'
              legend={<span>Last Run: <span className="text-success">Pass</span></span>}
              rightActions={
              [
                <MenuItem value='download' icon='remove_red_eye' caption='View' />,
                <MenuItem className="text-red" value='download' icon='get_app' caption='Download' />
               ]
              }
              className={`${style.project} ${style.success}`}
              to="/"
          />
      </List>
  </div>
)

export default ProjectListItem
