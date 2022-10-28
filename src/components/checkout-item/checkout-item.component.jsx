import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cart.context'
import Button from '../button/button.component'

import { useDispatch } from 'react-redux'
import { quantityHandle, removeCartItem } from '../../store/cart/cart.action'

import { useSelector } from 'react-redux'
import { selectCart } from '../../store/cart/cart.selector'

import {
  CheckItemContainer,
  ImageContainer,
  RemoveButton,
} from './checkout-item.styles.jsx'

const CheckoutItem = ({ product }) => {
  const dispatch = useDispatch()

  const cartItems = useSelector(selectCart)
  const { name, imageUrl, price, quantity } = product
  // const { removeCartItem, quantityHandle } = useContext(CartItemContext)
  const deleteCartItem = () => {
    dispatch(removeCartItem(product, cartItems))
  }

  const quantityManager = (type) => {
    dispatch(quantityHandle(product, type, cartItems))
    if (product.quantity <= 0) dispatch(removeCartItem(product))
  }
  return (
    <CheckItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={quantityManager.bind(product, 'decrease')}
        >
          &#10094;
        </div>
        {quantity}
        <div
          className="arrow"
          onClick={quantityManager.bind(product, 'increase')}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <RemoveButton onClick={deleteCartItem}>&#10005;</RemoveButton>
      <div className=""></div>
    </CheckItemContainer>
  )
}

export default CheckoutItem
