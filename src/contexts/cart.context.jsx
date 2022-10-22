import { createContext, useState, useEffect, useReducer } from 'react'

const addToCartHandler = (items = [], product) => {
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

export const CartItemContext = createContext({
  items: [],
  cartCount: 0,
  cartTotalPrice: 0,
  //   setItem: () => null,
  addCartItem: () => {}, //Custom setter
})

// Reducer

// action
export const CART_ACTION_TYPES = {
  // SET_CURRENT_ITEM: 'SET_CURRENT_ITEM',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL_PRICE: 'SET_CART_TOTAL_PRICE',
  SET_CART_ITEM: 'SET_CART_ITEM',
  // REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  // QUANTITY_HANDLE: 'QUANTITY_HANDLE',
}

// state
const INITIAL_STATE = {
  items: [],
  cartCount: 0,
  cartTotalPrice: 0,
}

// function
const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_COUNT:
      return { ...state, cartCount: payload }
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return { ...state, items: payload }
    case CART_ACTION_TYPES.SET_CART_TOTAL_PRICE:
      return { ...state, cartTotalPrice: payload }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

export const CartItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  // const [items, setItem] = useState([])
  // const [cartCount, setCartCount] = useState(0)
  // const [cartTotalPrice, setCartTotalPrice] = useState(0)

  const setCartCount = () =>
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_COUNT,
      payload: state.cartCount,
    })
  const setCartTotalPrice = () =>
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_TOTAL_PRICE,
      payload: state.cartTotalPrice,
    })
  const setCartItem = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: addToCartHandler(state.items, product),
    })
  const removeCartItem = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: addToCartHandler(state.items, product),
    })
  const quantityHandle = (product, type) =>
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: quantityHandler(state.items, product, type),
    })

  useEffect(() => {
    const amount = state.items.reduce((prev, curr) => prev + curr.quantity, 0)
    dispatch({ type: CART_ACTION_TYPES.SET_CART_COUNT, payload: amount })
    console.log('amount: ', amount)
  }, [state.items])
  useEffect(() => {
    const total = state.items.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    )
    dispatch({ type: CART_ACTION_TYPES.SET_CART_TOTAL_PRICE, payload: total })
  }, [state.items])

  const value = {
    items: state.items,
    setCartItem,
    removeCartItem,
    quantityHandle,
    cartCount: state.cartCount,
    setCartCount,
    cartTotalPrice: state.cartTotalPrice,
    setCartTotalPrice,
  }

  //   useEffect(() => {
  //     const newCartCount = items.reduce((prev, curr) => prev + curr.quantity, 0)
  //     setCartCount(newCartCount)
  //   }, [items])

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  )
}

// Context
// export const CartItemProvider = ({ children }) => {
//   const [items, setItem] = useState([])
//   const [cartCount, setCartCount] = useState(0)
//   const [cartTotalPrice, setCartToatalPrice] = useState(0)
//   const setCartItem = (product) => setItem(addToCartHandler(items, product))
//   const removeCartItem = (product) => setItem(removeProduct(items, product))
//   const quantityHandle = (product, type) =>
//     setItem(quantityHandler(items, product, type))

//   useEffect(() => {
//     const amount = items.reduce((prev, curr) => prev + curr.quantity, 0)
//     setCartCount(amount)
//     console.log('amount: ', amount)
//   }, [items])
//   useEffect(() => {
//     const total = items.reduce(
//       (prev, curr) => prev + curr.price * curr.quantity,
//       0
//     )
//     setCartToatalPrice(total)
//   }, [items])

//   const value = {
//     items,
//     setCartItem,
//     removeCartItem,
//     quantityHandle,
//     cartCount,
//     setCartCount,
//     cartTotalPrice,
//     setCartToatalPrice,
//   }

//   //   useEffect(() => {
//   //     const newCartCount = items.reduce((prev, curr) => prev + curr.quantity, 0)
//   //     setCartCount(newCartCount)
//   //   }, [items])

//   return (
//     <CartItemContext.Provider value={value}>
//       {children}
//     </CartItemContext.Provider>
//   )
// }
