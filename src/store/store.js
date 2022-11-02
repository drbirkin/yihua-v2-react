import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { Logger } from './middleware/logger'
import thunk from 'redux-thunk'

import { rootReducer } from './root-reducer'

// action passed to middleware before reducer
// custom middleware
// currying function
// const Logger = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action)
//   }

//   console.log('type: ', action.type)
//   console.log('payload: ', action.payload)
//   console.log('current state: ', store.getState()) //current reducer state of root

//   next(action)

//   console.log('next state: ', store.getState())
// }

const middleWares = [process.env.NODE_ENV !== 'production' && Logger, thunk].filter(Boolean)

// thunk

// default logger
// const middleWares = [logger]

// persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] //stop caching persist data of data like category etc, only cart is mattering
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// redux devtools CHROME
const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

// default
// const composedEnhancers = compose(applyMiddleware(...middleWares))
// root reducer
// ?clientside storage
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store)