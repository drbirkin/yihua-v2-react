import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cart.context'
import './checkout.styles.scss'
const Checkout = () => {
  const { items } = useContext(CartItemContext)
  return (
    <div>
      {items.map((item) => (
        <CheckoutItem product={item} key={item.id} />
      ))}
    </div>
  )
}

export default Checkout
