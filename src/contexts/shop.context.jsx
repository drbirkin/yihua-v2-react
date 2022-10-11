import { createContext, useState, useEffect } from 'react'
import SHOP_DATA from '../shop-data/shop-data.json'
export const ShopContext = createContext({
    shop: null,
    setShop: () => null
})

export const ShopProvider = ({ children }) => {
    const [shop, setShop] = useState(SHOP_DATA)
    const value = { shop, setShop }

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )
}