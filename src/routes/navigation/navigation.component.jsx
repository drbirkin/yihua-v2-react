import { Outlet, Link, NavLink } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => (
  <Fragment>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <NavLink className="nav-link" to="/shop">
          Shop
        </NavLink>
      </div>
      <div className="nav-links-container">
        <NavLink className="nav-link" to="/auth">
          Sign In
        </NavLink>
      </div>
    </div>
    <Outlet />
  </Fragment>
)

export default Navigation
