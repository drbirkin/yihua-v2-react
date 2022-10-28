import { createAction } from '../../utils/reducer/reducer.utils'
import { CART_ACTION_TYPES } from './cart.type'

// helper
const addToCartHandler = (items = [], product) => {
  // console.log('items: ', product)
  if (
    items.some((item) => {
      if (item.name === product.name) {
        item.quantity++
        return true
      } else return false
    })
  )
    return [...items]
  else return [...items, { ...product, quantity: 1 }]
}

const removeProduct = (items = [], product) => {
  //   console.log(product)
  return items.filter((item) => item.name !== product.name)
}

const quantityHandler = (items = [], product, type) => {
  console.log(product, type)
  const target = items.find((item) => item.name === product.name)
  if (type === 'increase') {
    target.quantity++
    return [...items]
  } else {
    target.quantity--
    return [...items]
  }
}

export const setCart = (items, product) => {
  const newCartItems = addToCartHandler(items, product)
  return setCurrentCart(newCartItems)
}
export const removeCartItem = (product, items) => {
  const newCartItems = removeProduct(items, product)
  return setCurrentCart(newCartItems)
}
export const quantityHandle = (product, type, items) => {
  const newCartItems = quantityHandler(items, product, type)
  return setCurrentCart(newCartItems)
}

const setCurrentCart = (newCartItems) => {
  // ?seperate buisness logic into selector
  // const newCartCount = newCartItems.reduce(
  //   (prev, curr) => prev + curr.quantity,
  //   0
  // )
  // const newCartTotal = newCartItems.reduce(
  //   (prev, curr) => prev + curr.price * curr.quantity,
  //   0
  // )
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems)
}

// dropdown
export const setCartDropdown = (dropdown) =>
  createAction(CART_ACTION_TYPES.SET_CART_DROPDOWN, dropdown)
