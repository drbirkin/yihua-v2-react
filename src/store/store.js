import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

// action passed to middleware before reducer
// custom middleware
// currying function
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }

  console.log('type: ', action.type)
  console.log('payload: ', action.payload)
  console.log('current state: ', store.getState()) //current reducer state of root

  next(action)

  console.log('next state: ', store.getState())
}

const middleWares = [loggerMiddleware]
// default logger
// const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares))
// root reducer
// ?clientside storage
export const store = createStore(rootReducer, undefined, composedEnhancers)
