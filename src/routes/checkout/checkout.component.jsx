import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cart.context'
import './checkout.styles.scss'
const Checkout = () => {
  const { items, cartTotalPrice } = useContext(CartItemContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <CheckoutItem product={item} key={item.id} />
      ))}

      <p className="total">Total: $ {cartTotalPrice}</p>
    </div>
  )
}

export default Checkout
