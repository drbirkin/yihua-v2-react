import SHOP_DATA from '../../shop-data/shop-data.json'
import { ShopContext } from '../../contexts/shop.context'
import { useContext, useEffect } from 'react'
import './shop.styles.scss'
import ProductCard from '../../components/product-cart/product-cart.component'

// https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#:~:text=Warning%3A%20Cannot%20update%20a%20component%20from%20inside%20the,you%20can%20wrap%20the%20setState%20call%20into%20useEffect.
/**
 * Use useEffect for state Change during render, otherwise warning
 * @param {*} setShop 
 * @returns 
 */
// const useEffectHandler = (setShop) => useEffect(() => {
//     setShop(SHOP_DATA)
//     console.log('Use')
// }, [])
const Shop = () => {
    const { shop, setShop } = useContext(ShopContext)
    // useEffectHandler(setShop)
    console.log('check: ', shop)

    return (
        <div className='products-container'>
            {shop.map((product) => {
                // https://reactjs.org/docs/hooks-rules.html
                // setShop([...shop, name])
                return (
                    <ProductCard product={product} key={product.id} />
                )
            })}
        </div>
    )
}

export default Shop