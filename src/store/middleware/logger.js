export const Logger =  (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }
  console.log('type: ', action.type)
  console.log('payload: ', action.payload)
  console.log('current state: ', store.getState()) //current reducer state of root

  next(action)

  console.log('next state: ', store.getState())

}