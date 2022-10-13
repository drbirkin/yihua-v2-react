import { createContext, useState } from 'react'

export const CartContext = createContext({
  dropdown: false,
  setDropdown: () => false,
})

export const CartProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false)
  const value = { dropdown, setDropdown }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
