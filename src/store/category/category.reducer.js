import { CATEGORY_ACTION_TYPES } from './category.type'

const INITIAL_STATE = {
  shop: [],
}

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CURRENT_SHOP:
      return { ...state, shop: payload }
    default:
      return state
  }
}
