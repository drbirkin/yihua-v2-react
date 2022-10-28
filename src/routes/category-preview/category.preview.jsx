import { ShopContext } from '../../contexts/shop.context'
import { useContext, useEffect, Fragment } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx'
import { useSelector } from 'react-redux'
import { categorySelector } from '../../store/category/category.selector'

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
const CategoriesPreview = () => {
  // const { shop } = useContext(ShopContext)
  const shop = useSelector(categorySelector)
  // useEffectHandler(setShop)
  // console.log('check: ', shop)

  return (
    <Fragment>
      {Object.keys(shop).map(
        (title) => {
          const products = shop[title]
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        }
        //   (
        //     <Fragment key={title}>
        //       <h2>{title}</h2>
        //       <div className="products-container">
        //         {shop[title].map((product) => {
        //           // https://reactjs.org/docs/hooks-rules.html
        //           // setShop([...shop, name])
        //           return <ProductCard product={product} key={product.id} />
        //         })}
        //       </div>
        //     </Fragment>
        //   )
      )}
    </Fragment>
  )
}

export default CategoriesPreview
