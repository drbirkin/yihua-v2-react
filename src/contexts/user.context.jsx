import { createContext, useState, useReducer, useEffect } from 'react'
import {
  onAuthStateChangedListener,
  signOutUser,
} from '../utils/firebase/firebase.utils'

/**
 create context variable (actual value)
 * @{...} default value when not matching Provider above in the tree
 * */
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})
const useEffectHandler = () =>
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user)
    })
    return unsubscribe
  }, [])

// ?Reducers
// packed into redux folder
// action
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}
// state
const INITIAL_STATE = {
  currentUser: null,
}
// function
const userReducer = (state, action) => {
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
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

/**
 provider (actual component)
 * @children components
 * @value context value
 *  */
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)
  console.log('currentUser: ', currentUser)
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
  }
  const value = { currentUser, setCurrentUser }
  signOutUser()

  useEffectHandler()

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
// export const UserProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null)
//     const value = { currentUser, setCurrentUser }
//     signOutUser()

//     useEffectHandler()

//     return (
//         <UserContext.Provider value={value}>{children}</UserContext.Provider>
//     )
// }
