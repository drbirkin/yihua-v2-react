import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Navigation from './routes/navigation/navigation.component'
import Checkout from './routes/checkout/checkout.component'
import { Routes, Route } from 'react-router-dom'
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
} from './utils/firebase/firebase.utils'
import { useEffect } from 'react'
import { setCurrentUser } from './store/user/user.action'
import { setCurrentCategory } from './store/category/category.action'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user)
      if (user) createUserDocumentFromAuth(user)
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [])
  // // ?Othewise it will call at homepage
  // useEffect(() => {
  //   // Wrap Async function
  //   const getCategoriesMap = async () => {
  //     const categoriesArray = await getCategoriesAndDocuments()
  //     console.log(categoriesArray)
  //     dispatch(setCurrentCategory(categoriesArray))
  //   }
  //   getCategoriesMap()
  // }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
      {/* <Route path="/signIn" element={<Navigation />}>
      </Route> */}
    </Routes>
  )
}

export default App
