import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-iten/cart-item.component'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartItemContext } from '../../contexts/cart.context'
import { CartContext } from '../../contexts/dropdown.context'
// const DropdownToggleHandler = () => useEffect(() => {}, [])

const CartDropdown = () => {
  const { items, cartTotalPrice, setCartToatalPrice } =
    useContext(CartItemContext)
  useEffect(() => {
    const total = items.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    )
    setCartToatalPrice(total)
  }, [items])
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

    <div className="cart-dropdown-container">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem product={item} key={item.id}></CartItem>
        ))}
      </div>
      <div className="cart-items-total">
        <p>Total: ${cartTotalPrice}</p>
      </div>
      <Button
        children="Go to Checkout"
        onClick={() => {
          cartHandler()
          goToCheckoutHandler()
        }}
      />
    </div>
  )
}

export default CartDropdown
