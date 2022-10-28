// Reducers
import { USER_ACTION_TYPES } from './user.type'
// action

// state
const INITIAL_STATE = {
  currentUser: null,
}
// function
export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action
  console.log('dispatched', action)
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        // shallow copy object
        ...state,
        currentUser: payload,
      }
    case 'increment':
      return
    default:
      return state
    //   throw new Error(`Unhandled type ${type} in userReducer`)
  }
}
