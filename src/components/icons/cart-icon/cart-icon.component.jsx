import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/cart.context'

const CartIcon = () => {
  const { setDropdown, dropdown } = useContext(CartContext)
  const cartDropdownHandler = () => {
    const status = dropdown
    setDropdown(!status)
  }

  return (
    <div className="cart-icon-container" onClick={cartDropdownHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  )
}

export default CartIcon
