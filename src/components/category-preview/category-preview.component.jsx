import './category-preview.styles.scss'
import ProductCard from '../product-cart/product-cart.component'
import { useNavigate } from 'react-router-dom'
const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate()
  const goToCategory = () => {
    navigate(`/shop/${title}`)
  }
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={goToCategory}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview
