import { useNavigate } from 'react-router-dom'
import {
  CategoryContainer,
  BackgroundImage,
  CategoryContainerBody,
} from './categoryItem.style.jsx'

const CategoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate()
  const redirectTo = () => navigate(route)

  return (
    <CategoryContainer onClick={redirectTo}>
      <BackgroundImage
        imageUrl={imageUrl}
        // style={{
        //   backgroundImage: `url(${imageUrl})`,
        // }}
      />
      <CategoryContainerBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryContainerBody>
    </CategoryContainer>
  )
}

export default CategoryItem
