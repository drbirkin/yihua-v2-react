import { CART_ACTION_TYPES } from './cart.type'

export const CART_INITIAL_STATE = {
  items: [],
  dropdown: false,
  // cartCount: 0,
  // cartTotalPrice: 0,
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return { ...state, items: payload }

    case CART_ACTION_TYPES.SET_CART_DROPDOWN:
      return { ...state, dropdown: payload }
    default:
      return state
  }
}
