import { createContext, useState, useEffect } from 'react'

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

export const CartItemProvider = ({ children }) => {
  const [items, setItem] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotalPrice, setCartToatalPrice] = useState(0)
  const setCartItem = (product) => setItem(addToCartHandler(items, product))
  const removeCartItem = (product) => setItem(removeProduct(items, product))
  const quantityHandle = (product, type) =>
    setItem(quantityHandler(items, product, type))
  const value = {
    items,
    setCartItem,
    removeCartItem,
    quantityHandle,
    cartCount,
    setCartCount,
    cartTotalPrice,
    setCartToatalPrice,
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
