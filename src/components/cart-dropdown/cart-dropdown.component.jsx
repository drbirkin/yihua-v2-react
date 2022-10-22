import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartItemsTotal,
} from './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-iten/cart-item.component'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartItemContext } from '../../contexts/cart.context'
import { CartContext } from '../../contexts/dropdown.context'
// const DropdownToggleHandler = () => useEffect(() => {}, [])

const CartDropdown = () => {
  const { items, cartTotalPrice, setCartTotalPrice } =
    useContext(CartItemContext)
  // ? Should stay in context function, cause will touch other files
  // useEffect(() => {
  //   const total = items.reduce(
  //     (prev, curr) => prev + curr.price * curr.quantity,
  //     0
  //   )
  //   setCartToatalPrice(total)
  // }, [items])
  const { dropdown, setDropdown } = useContext(CartContext)
  const cartHandler = () => {
    setDropdown(!dropdown)
  }

  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    // DropdownToggleHandler()
    // useEffect(() => console.log(isCartActive, [isCartActive]))

    <CartDropdownContainer>
      <CartItems>
        {items.length ? (
          items.map((item) => (
            <CartItem product={item} key={item.id}></CartItem>
          ))
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      {cartTotalPrice ? (
        <CartItemsTotal>
          <p>Total: ${cartTotalPrice}</p>
        </CartItemsTotal>
      ) : (
        ''
      )}
      <Button
        children="Go to Checkout"
        onClick={() => {
          cartHandler()
          goToCheckoutHandler()
        }}
      />
    </CartDropdownContainer>
  )
}

export default CartDropdown
