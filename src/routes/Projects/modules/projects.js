// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_ALL_PROJECTS_REQUEST = 'LOAD_ALL_PROJECTS_REQUEST'
export const SHOW_ADD_PROJECTS = 'SHOW_ADD_PROJECTS'
export const CLOSE_ADD_PROJECTS = 'CLOSE_ADD_PROJECTS'

// ------------------------------------
// Actions
// ------------------------------------
export function loadAllProjects () {
  return {
    type    : LOAD_ALL_PROJECTS_REQUEST
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

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  loadAllProjects,
  closeAddProjectForm,
  showAddProjectForm,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_ALL_PROJECTS_REQUEST] : (state, action) => state + action.payload,
  [SHOW_ADD_PROJECTS] : (state, action) => { return { ...state, isAddProjectFormShown: true } },
  [CLOSE_ADD_PROJECTS] : (state, action) => { return { ...state, isAddProjectFormShown: false } }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { isAddProjectFormShown: false }
export default function projectsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
