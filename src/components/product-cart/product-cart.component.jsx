import { useContext, useState, useEffect } from 'react'
import { ProductCardContainer, Footer } from './product-card.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { useDispatch } from 'react-redux'
import { setCart } from '../../store/cart/cart.action.js'
import { useSelector } from 'react-redux'

import { CartItemContext } from '../../contexts/cart.context'
import { selectCart } from '../../store/cart/cart.selector.js'
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  // const { items, setCartItem } = useContext(CartItemContext)
  const cartItems = useSelector(selectCart)
  const dispatch = useDispatch()
  const cartHandler = () => {
    console.log('add items to cart: ', product)
    dispatch(setCart(cartItems, product))
  }

  // console.log('items: ', items)
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        children="Add to Cart"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={cartHandler}
      />
    </ProductCardContainer>
  )
}

export default ProductCard
