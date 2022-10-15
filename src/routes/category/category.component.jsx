import { CategoryContainer, Title } from './category.styles.jsx'
import { useParams } from 'react-router-dom'
import { useState, useContext, useEffect, Fragment } from 'react'

import { ShopContext } from '../../contexts/shop.context'

import ProductCard from '../../components/product-cart/product-cart.component'
const Category = () => {
  const { category } = useParams()
  const { shop } = useContext(ShopContext)
  const [products, setProducts] = useState(shop[category])

  console.log(category)
  useEffect(() => {
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
