import {
  CategoryContainer,
  BackgroundImage,
  CategoryContainerBody,
} from './categoryItem.style.jsx'

const CategoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <CategoryContainer>
      <BackgroundImage
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CategoryContainerBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryContainerBody>
    </CategoryContainer>
  )
}

export default CategoryItem
