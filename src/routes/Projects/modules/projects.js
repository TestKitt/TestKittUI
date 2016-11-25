const API = require('../../../utils/API').default

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_ALL_PROJECTS_REQUEST = 'LOAD_ALL_PROJECTS_REQUEST'
export const LOAD_ALL_PROJECTS_SUCCESS = 'LOAD_ALL_PROJECTS_SUCCESS'
export const LOAD_ALL_PROJECTS_ERROR = 'LOAD_ALL_PROJECTS_ERROR'
export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST'
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS'
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'
export const SHOW_ADD_PROJECTS = 'SHOW_ADD_PROJECTS'
export const CLOSE_ADD_PROJECTS = 'CLOSE_ADD_PROJECTS'

// ------------------------------------
// Actions
// ------------------------------------
export const fetchProjects = () => {
  return (dispatch, getState) => {
    dispatch(loadAllProjectsRequest())
    return API.get('/api/projects')
      .then((data) => {
        dispatch(loadProjectsSuccess(data))
      })
      .catch(() => {
        dispatch(loadProjectsError())
      })
  }
}

export const createProject = () => {
  return (dispatch, getState) => {
    dispatch(createProjectRequest())
    return API.post('/api/projects')
      .then((data) => {
        dispatch(createProjectSuccess(data))
      })
      .catch((err, res) => {
        dispatch(createProjectError(err))
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

export function createProjectRequest (data) {
  return {
    type    : CREATE_PROJECT_REQUEST,
    project : data
  }
}

export function createProjectSuccess (data) {
  return {
    type    : CREATE_PROJECT_SUCCESS,
    project : data
  }
}

export function createProjectError (errors) {
  return {
    type    : CREATE_PROJECT_ERROR,
    errors
  }
}

export function closeAddProjectForm () {
  return {
    type    : CLOSE_ADD_PROJECTS
  }
}

export function showAddProjectForm () {
  return {
    type    : SHOW_ADD_PROJECTS
  }
}

export const actions = {
  fetchProjects,
  closeAddProjectForm,
  showAddProjectForm
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_ALL_PROJECTS_REQUEST] : (state, action) => { return { ...state, fetching: true } },
  [CREATE_PROJECT_REQUEST] : (state, action) => { return { ...state, creating: true } },
  [LOAD_ALL_PROJECTS_SUCCESS] : (state, action) => {
    return {
      ...state,
      projects: action.data,
      fetching: false
    }
  },
  [LOAD_ALL_PROJECTS_ERROR] : (state, action) => { return { ...state, fetching: false } },
  [CREATE_PROJECT_SUCCESS] : (state, action) => {
    return {
      ...state,
      // projects: state.projects.concat(action.data),
      creating: false
    }
  },
  [CREATE_PROJECT_ERROR] : (state, action) => { return { ...state, creating: false } },
  [SHOW_ADD_PROJECTS] : (state, action) => { return { ...state, isAddProjectFormShown: true } },
  [CLOSE_ADD_PROJECTS] : (state, action) => { return { ...state, isAddProjectFormShown: false } }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { isAddProjectFormShown: false, fetching: false, creating: false, projects: [] }
export default function projectsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
