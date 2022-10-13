import { useContext, useState } from 'react'
import './product-card.styles.scss'
import Button from '../button/button.component'
import { CartItemContext } from '../../contexts/cart.context'
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { items, setCartItem } = useContext(CartItemContext)
  const cartHandler = () => {
    setCartItem(product)
  }

  console.log('items: ', items)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        children="Add to Cart"
        buttonType="inverted"
        onClick={cartHandler}
      />
    </div>
  )
}

export default ProductCard
