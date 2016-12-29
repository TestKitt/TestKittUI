// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTICATION = 'HIDE_NOTICATION'
// ------------------------------------
// Actions
// ------------------------------------

export function showNotification (message) {
  return {
    type    : SHOW_NOTIFICATION,
    message
  }
}

export function hideNotification () {
  return {
    type    : HIDE_NOTICATION
  }
}

export const actions = {
  showNotification,
  hideNotification
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_NOTIFICATION] : (state, action) => { return { message: action.message, isShown: true } },
  [HIDE_NOTICATION] : (state, action) => { return { message: null, isShown: false } }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { message: null, isShown: false }
export default function notificationsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
