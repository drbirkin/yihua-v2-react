import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.styles.jsx'
import ProductCard from '../product-cart/product-cart.component'
import { useNavigate } from 'react-router-dom'
const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate()
  const goToCategory = () => {
    navigate(`/shop/${title}`)
  }
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={goToCategory}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
