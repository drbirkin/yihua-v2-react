import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx'
// import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../../contexts/dropdown.context'
import { CartItemContext } from '../../../contexts/cart.context'

import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartDropdown,
  selectCartCount,
} from '../../../store/cart/cart.selector.js'
import { setCartDropdown } from '../../../store/cart/cart.action.js'

const CartIcon = () => {
  // const { setDropdown, dropdown } = useContext(CartContext)
  // const { items, cartCount, setCartCount } = useContext(CartItemContext)
  const dispatch = useDispatch()
  const dropdown = useSelector(selectCartDropdown)
  const cartCount = useSelector(selectCartCount)

  const cartDropdownHandler = () => {
    const status = dropdown
    dispatch(setCartDropdown(!status))
  }

  // ?context
  // const cartDropdownHandler = () => {
  //   const status = dropdown
  //   setDropdown(!status)
  // }

  // Total items count
  // useEffect(() => {
  //   const amount = items.reduce((prev, curr) => prev + curr.quantity, 0)
  //   setCartCount(amount)
  //   console.log('amount: ', amount)
  // }, [items])

  return (
    <CartIconContainer onClick={cartDropdownHandler}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
