import { CategoriesContainer } from './menu.style.jsx'
import CategoryItem from '../category-item/categoryItem.component'

const Menu = ({ categories }) => {
  console.log(categories)
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </CategoriesContainer>
  )
}

export default Menu
