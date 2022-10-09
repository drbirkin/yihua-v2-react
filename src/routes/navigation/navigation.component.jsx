import { Outlet, Link, NavLink } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import './navigation.styles.scss'

import { signOutUser } from '../../utils/firebase/firebase.utils'



const Navigation = () => {
  // access Context
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log('context: ', currentUser)
  const signOutHandler = async () => {
    const res = await signOutUser()
    setCurrentUser(null)
    console.log(res)
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ) :
            (<NavLink className="nav-link" to="/auth">
              Sign In
            </NavLink>)
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
