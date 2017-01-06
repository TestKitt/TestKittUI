const API = require('utils/API').default
import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'
import { showNotification } from 'store/notifications'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_ALL_PROJECTS_REQUEST = 'LOAD_ALL_PROJECTS_REQUEST'
export const LOAD_ALL_PROJECTS_SUCCESS = 'LOAD_ALL_PROJECTS_SUCCESS'
export const LOAD_ALL_PROJECTS_ERROR = 'LOAD_ALL_PROJECTS_ERROR'
export const SAVE_PROJECT_REQUEST = 'SAVE_PROJECT_REQUEST'
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS'
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS'
export const SAVE_PROJECT_ERROR = 'SAVE_PROJECT_ERROR'
export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST'
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS'
export const DELETE_PROJECT_ERROR = 'DELETE_PROJECT_ERROR'

// ------------------------------------
// Actions
// ------------------------------------
export const fetchProjects = () => {
  return (dispatch, getState) => {
    dispatch(loadAllProjectsRequest())
    return API.get('/api/projects')
      .then((data) => {
        dispatch(loadProjectsSuccess(data.data))
      }, (err) => {
        dispatch(loadProjectsError(err))
      })
  }
}

export const saveProject = (values, id) => {
  return (dispatch, getState) => {
    dispatch(saveProjectRequest(values, id))
    if (id) {
      return API.patch(`/api/projects/${id}`, values)
        .then((data) => {
          dispatch(updateProjectSuccess(data, id))
          dispatch(showNotification('Project updated successfully'))
        }, (err) => {
          dispatch(saveProjectError(err))
          throw new SubmissionError(err)
        })
    }

    return API.post('/api/projects', values)
      .then((data) => {
        dispatch(createProjectSuccess(data))
        dispatch(showNotification('Project saved successfully!'))
      }, (err) => {
        dispatch(saveProjectError(err))
        throw new SubmissionError(err)
      })
  }
}

export const deleteProject = (id) => {
  return (dispatch, getState) => {
    dispatch(deleteProjectRequest(id))
    return API.remove(`/api/projects/${id}`, {})
      .then((data) => {
        dispatch(deleteProjectSuccess(id))
        dispatch(showNotification('Project deleted successfully'))
        browserHistory.push('/projects')
      }, (err) => {
        dispatch(deleteProjectError(err))
      })
  }
}

export function loadAllProjectsRequest () {
  return {
    type    : LOAD_ALL_PROJECTS_REQUEST
  }
}

export function loadProjectsSuccess (data) {
  return {
    type    : LOAD_ALL_PROJECTS_SUCCESS,
    projects : data
  }
}

export function loadProjectsError () {
  return {
    type    : LOAD_ALL_PROJECTS_ERROR
  }
}

export function saveProjectRequest (data, id) {
  return {
    type    : SAVE_PROJECT_REQUEST,
    project : data,
    id
  }
}

export function updateProjectSuccess (data, id) {
  return {
    type    : UPDATE_PROJECT_SUCCESS,
    project : data,
    id
  }
}

export function createProjectSuccess (data) {
  return {
    type    : CREATE_PROJECT_SUCCESS,
    project : data
  }
}

export function saveProjectError (errors) {
  return {
    type    : SAVE_PROJECT_ERROR,
    errors
  }
}

export function deleteProjectRequest (id) {
  return {
    type    : DELETE_PROJECT_REQUEST,
    project : id
  }
}

export function deleteProjectSuccess (id) {
  return {
    type    : DELETE_PROJECT_SUCCESS,
    project : id
  }
}

export function deleteProjectError (errors) {
  return {
    type    : DELETE_PROJECT_ERROR,
    errors
  }
}

export const actions = {
  fetchProjects, saveProject, deleteProject
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_ALL_PROJECTS_REQUEST] : (state, action) => { return { ...state, fetching: true } },
  [LOAD_ALL_PROJECTS_SUCCESS] : (state, action) => {
    return {
      ...state,
      projects: action.projects,
      fetching: false
    }
  },
  [LOAD_ALL_PROJECTS_ERROR] : (state, action) => { return { ...state, fetching: false } },
  [CREATE_PROJECT_SUCCESS] : (state, action) => {
    return {
      ...state,
      projects: state.projects.concat(action.project)
    }
  },
  [UPDATE_PROJECT_SUCCESS] : (state, action) => {
    return {
      ...state,
      projects: state.projects.map((project) => {
        if (project._id === action.id) {
          return action.project
        }

        return project
      })
    }
  },
  [DELETE_PROJECT_SUCCESS] : (state, action) => {
    return {
      ...state,
      projects: state.projects.filter((project) => project._id !== action.project)
    }
  },
  [SAVE_PROJECT_ERROR] : (state, action) => { return { ...state } }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { fetching: false, projects: [] }
export default function projectsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
