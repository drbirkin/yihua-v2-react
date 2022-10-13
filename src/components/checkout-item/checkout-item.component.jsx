import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import './checkout-item.styles.scss'

const CheckoutItem = ({ product }) => {
  const { name, price, quantity } = product
  const { removeCartItem, quantityHandle } = useContext(CartItemContext)
  const deleteCartItem = () => {
    removeCartItem(product)
  }

  const quantityManager = (type) => {
    quantityHandle(product, type)
    if (product.quantity <= 0) removeCartItem(product)
  }
  return (
    <div>
      {name} {price} {quantity}
      <div>
        <Button onClick={quantityManager.bind(product, 'decrease')}>-</Button>
        <Button onClick={quantityManager.bind(product, 'increase')}>+</Button>
      </div>
      <Button onClick={deleteCartItem}>Delete</Button>
    </div>
  )
}

export default CheckoutItem
