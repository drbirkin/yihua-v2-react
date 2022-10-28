import { CategoryContainer, Title } from './category.styles.jsx'
import { useParams } from 'react-router-dom'
import { useState, useContext, useEffect, Fragment } from 'react'

import { ShopContext } from '../../contexts/shop.context'
import { useSelector } from 'react-redux'
import { categorySelector } from '../../store/category/category.selector'
import ProductCard from '../../components/product-cart/product-cart.component'
const Category = () => {
  console.log('render/re-rendering category items')
  // everytime useselector runs wt will triggers a rerender, cause selector returns a new object
  const shop = useSelector(categorySelector)
  const { category } = useParams()
  // const { shop } = useContext(ShopContext)
  const [products, setProducts] = useState(shop[category])

  useEffect(() => {
    console.log('effect fired using setProducts')
    setProducts(shop[category])
  }, [category, shop])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {/* Safeguard for async fetching */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  )
}

export default Category
