import { createContext, useState, useEffect } from 'react'
import SHOP_DATA from '../shop-data/shop-data.js'
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils.jsx'
export const ShopContext = createContext({
  shop: null,
  setShop: () => null,
})

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState({})

  useEffect(() => {
    // Wrap Async function
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      // console.log(getCategoriesMap)
      setShop(categoryMap)
    }
    getCategoriesMap()
  }, [])
  const value = { shop }
  // Adding SHOP_DATA to firebase
  //   useEffect(() => {
  //     addCollectionAndDocuments('category', SHOP_DATA)
  //   }, [])

  console.log('Shop: ', shop)

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
