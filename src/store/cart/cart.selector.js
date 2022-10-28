import { createSelector } from 'reselect'

// ?reselct
// memorize reducer
const selectCartReducer = (state) => state.cart
// memorize reducer state
export const selectCart = createSelector(
  [selectCartReducer],
  (cartItems) => cartItems.items
)

export const selectCartCount = createSelector([selectCart], (cartItems) => {
  const newCartCount = cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
  return newCartCount
})
export const selectCartTotal = createSelector([selectCart], (cartItems) => {
  const newCartTotal = cartItems.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  )
  return newCartTotal
})

export const selectCartDropdown = createSelector(
  [selectCartReducer],
  (cart) => cart.dropdown
)
