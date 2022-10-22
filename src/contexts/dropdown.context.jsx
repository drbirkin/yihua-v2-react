import { createContext, useState, useReducer } from 'react'

export const CartContext = createContext({
  dropdown: false,
  setDropdown: () => false,
})

// reducer

// action
export const DROPDOWN_ACTION_TYPES = {
  SET_CART_DROPDOWN: 'SET_CART_DROPDOWN',
}
// intialization
const INITIAL_STATE = {
  dropdown: false,
}
// function
const dropDownReducer = (state, { type, payload }) => {
  switch (type) {
    case DROPDOWN_ACTION_TYPES.SET_CART_DROPDOWN:
      return { ...state, dropdown: payload }
    default:
      throw new Error(`Unhandled type ${type} in dropdownReducer`)
  }
}

export const CartProvider = ({ children }) => {
  // const [dropdown, setDropdown] = useState(false)
  const [{ dropdown }, dispatch] = useReducer(dropDownReducer, INITIAL_STATE)

  const setDropdown = (dropdown) =>
    dispatch({
      type: DROPDOWN_ACTION_TYPES.SET_CART_DROPDOWN,
      payload: dropdown,
    })
  const value = { dropdown, setDropdown }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
