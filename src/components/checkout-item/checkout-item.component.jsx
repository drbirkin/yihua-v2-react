import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import './checkout-item.styles.scss'

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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
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
      <div className="remove-button" onClick={deleteCartItem}>
        &#10005;
      </div>
      <div className=""></div>
    </div>
  )
}

export default CheckoutItem
