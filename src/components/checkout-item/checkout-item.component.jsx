import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import {
  CheckItemContainer,
  ImageContainer,
  RemoveButton,
} from './checkout-item.styles.jsx'

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product
  const { removeCartItem, quantityHandle } = useContext(CartItemContext)
  const deleteCartItem = () => {
    removeCartItem(product)
  }

  const quantityManager = (type) => {
    quantityHandle(product, type)
    if (product.quantity <= 0) removeCartItem(product)
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
