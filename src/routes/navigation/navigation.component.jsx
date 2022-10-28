import { Outlet, Link, NavLink } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import {
  NavigationContainer,
  Navlink,
  Navlinks,
  LogoContainer,
} from './navigation.styles.jsx'

import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectCartDropdown } from '../../store/cart/cart.selector'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/icons/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../contexts/dropdown.context'

const Navigation = () => {
  // redux selector return nested object
  const currentUser = useSelector(selectCurrentUser)
  const dropdown = useSelector(selectCartDropdown)
  // access Context
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log('context: ', currentUser)
  const signOutHandler = async () => {
    const res = await signOutUser()
    // setCurrentUser(null)
    console.log(res)
  }

  // const { dropdown } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <Navlinks>
          <Navlink to="/shop">SHOP</Navlink>
          {currentUser ? (
            <Navlink as="span" onClick={signOutHandler}>
              SIGN OUT
            </Navlink>
          ) : (
            <Navlink to="/auth">Sign In</Navlink>
          )}
          <CartIcon />
        </Navlinks>
        {console.log(dropdown)}
        {dropdown && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
