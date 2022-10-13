import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../../contexts/dropdown.context'
import { CartItemContext } from '../../../contexts/cart.context'

const CartIcon = () => {
  const { setDropdown, dropdown } = useContext(CartContext)
  const { items, cartCount, setCartCount } = useContext(CartItemContext)
  const cartDropdownHandler = () => {
    const status = dropdown
    setDropdown(!status)
  }
  // Total items count
  // useEffect(() => {
  //   const amount = items.reduce((prev, curr) => prev + curr.quantity, 0)
  //   setCartCount(amount)
  //   console.log('amount: ', amount)
  // }, [items])

  return (
    <div className="cart-icon-container" onClick={cartDropdownHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon
