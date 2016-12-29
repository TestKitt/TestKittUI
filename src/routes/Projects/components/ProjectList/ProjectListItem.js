import React, { PropTypes } from 'react'
import { Link as RouterLink } from 'react-router'
import { ListItem } from 'react-toolbox/lib/list'
import style from './ProjectListItem.scss'

let ProjectListItem = (props) => {
  const { name, imageUrl, lastRunResult, id } = props

  return (
    <RouterLink to={`projects/${id}`}>
      <ListItem
        avatar={imageUrl}
        caption={name}
        legend={`Last Run: ${lastRunResult || 'No data'}`}
        className={`${style.project} ${lastRunResult ? style[lastRunResult] : style.no_data}`}
      />
    </RouterLink>
  )
}

ProjectListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  lastRunResult: PropTypes.string
}

export default ProjectListItem
