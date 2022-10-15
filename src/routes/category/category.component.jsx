import './category.styles.scss'
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
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {/* Safeguard for async fetching */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  )
}

export default Category
