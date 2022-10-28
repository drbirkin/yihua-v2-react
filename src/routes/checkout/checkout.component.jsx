import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cart.context'

import { useSelector } from 'react-redux'
import { selectCart, selectCartTotal } from '../../store/cart/cart.selector'

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Title,
} from './checkout.styles'
const Checkout = () => {
  // const { items, cartTotalPrice } = useContext(CartItemContext)
  const items = useSelector(selectCart)
  const cartTotalPrice = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {items.map((item) => (
        <CheckoutItem product={item} key={item.id} />
      ))}

      <Title>Total: $ {cartTotalPrice}</Title>
    </CheckoutContainer>
  )
}

export default Checkout
