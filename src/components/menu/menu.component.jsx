import './menu.style.scss'
import CategoryItem from '../category-item/categoryItem.component'

const Menu = ({ categories }) => {
  console.log(categories)
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Menu
