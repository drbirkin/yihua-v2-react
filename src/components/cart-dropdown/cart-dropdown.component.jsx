import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
// import { useEffect } from 'react'
// const DropdownToggleHandler = () => useEffect(() => {}, [])

const CartDropdown = () => (
  // DropdownToggleHandler()
  // useEffect(() => console.log(isCartActive, [isCartActive]))

  <div className="cart-dropdown-container">
    <div className="cart-items">
      <Button children="Go to Checkout" />
    </div>
  </div>
)

export default CartDropdown
