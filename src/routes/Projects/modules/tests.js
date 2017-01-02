const API = require('utils/API').default
import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'
import { showNotification } from 'store/notifications'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_ALL_TESTS_REQUEST = 'LOAD_ALL_TESTS_REQUEST'
export const LOAD_ALL_TESTS_SUCCESS = 'LOAD_ALL_TESTS_SUCCESS'
export const LOAD_ALL_TESTS_ERROR = 'LOAD_ALL_TESTS_ERROR'
export const SAVE_TEST_REQUEST = 'SAVE_TEST_REQUEST'
export const CREATE_TEST_SUCCESS = 'CREATE_TEST_SUCCESS'
export const UPDATE_TEST_SUCCESS = 'UPDATE_TEST_SUCCESS'
export const SAVE_TEST_ERROR = 'SAVE_TEST_ERROR'
export const DELETE_TEST_REQUEST = 'DELETE_TEST_REQUEST'
export const DELETE_TEST_SUCCESS = 'DELETE_TEST_SUCCESS'
export const DELETE_TEST_ERROR = 'DELETE_TEST_ERROR'

// ------------------------------------
// Actions
// ------------------------------------
export const fetchTests = (projectId) => {
  return (dispatch, getState) => {
    dispatch(loadAllTestsRequest())
    return API.get(`/api/projects/${projectId}/tests`)
      .then((data) => {
        dispatch(loadTestsSuccess(data.data))
      }, (err) => {
        dispatch(loadTestsError(err))
      })
  }
}

export const saveTest = (values, projectId, id) => {
  return (dispatch, getState) => {
    dispatch(saveTestRequest(values, id))
    if (id){
      return API.patch(`/api/projects/${projectId}/tests/${id}`, values)
        .then((data) => {
          dispatch(updateTestSuccess(data, id))
          dispatch(showNotification('Test updated successfully'))
        }, (err) => {
          dispatch(saveTestError(err))
          throw new SubmissionError(err)
        })
    }

    return API.post(`/api/projects/${projectId}/tests`, values)
      .then((data) => {
        dispatch(createTestSuccess(data))
        dispatch(showNotification('Test saved successfully!'))
      }, (err) => {
        dispatch(saveTestError(err))
        throw new SubmissionError(err)
      })
  }
}

export const deleteTest = (projectId, id) => {
  return (dispatch, getState) => {
    dispatch(deleteTestRequest(id))
    return API.remove(`/api/projects/${projectId}/tests/${id}`, {})
      .then((data) => {
        dispatch(deleteTestSuccess(projectId, id))
        dispatch(showNotification('Test deleted successfully'))
        browserHistory.push('/tests')
      }, (err) => {
        dispatch(deleteTestError(err))
      })
  }
}

export function loadAllTestsRequest () {
  return {
    type    : LOAD_ALL_TESTS_REQUEST
  }
}

export function loadTestsSuccess (data) {
  return {
    type    : LOAD_ALL_TESTS_SUCCESS,
    tests : data
  }
}

export function loadTestsError () {
  return {
    type    : LOAD_ALL_TESTS_ERROR
  }
}

export function saveTestRequest (data, projectId, id) {
  return {
    type    : SAVE_TEST_REQUEST,
    test : data,
    projectId,
    id
  }
}

export function updateTestSuccess (data, projectId, id) {
  return {
    type    : UPDATE_TEST_SUCCESS,
    test : data,
    projectId,
    id
  }
}

export function createTestSuccess (data, projectId) {
  return {
    type    : CREATE_TEST_SUCCESS,
    projectId,
    test : data
  }
}

export function saveTestError (errors) {
  return {
    type    : SAVE_TEST_ERROR,
    errors
  }
}

export function deleteTestRequest (projectId, id) {
  return {
    type    : DELETE_TEST_REQUEST,
    projectId,
    test : id
  }
}

export function deleteTestSuccess (id) {
  return {
    type    : DELETE_TEST_SUCCESS,
    test : id
  }
}

export function deleteTestError (errors) {
  return {
    type    : DELETE_TEST_ERROR,
    errors
  }
}

export const actions = {
  fetchTests, saveTest, deleteTest
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_ALL_TESTS_REQUEST] : (state, action) => { return { ...state, fetching: true } },
  [LOAD_ALL_TESTS_SUCCESS] : (state, action) => {
    return {
      ...state,
      testsByProjectId: {
        ...state.testsByProjectId,
        [action.projectId]: action.tests
      },
      fetching: false
    }
  },
  [LOAD_ALL_TESTS_ERROR] : (state, action) => { return { ...state, fetching: false } },
  [CREATE_TEST_SUCCESS] : (state, action) => {
    return {
      ...state,
      testsByProjectId: {
        ...state.testsByProjectId,
        [action.projectId]: action.test
      }
    }
  },
  [UPDATE_TEST_SUCCESS] : (state, action) => {
    return {
      ...state
    }
  },
  [DELETE_TEST_SUCCESS] : (state, action) => {
    return {
      ...state
    }
  },
  [SAVE_TEST_ERROR] : (state, action) => { return { ...state } }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { fetching: false, testsByProjectId: {} }
export default function testsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
