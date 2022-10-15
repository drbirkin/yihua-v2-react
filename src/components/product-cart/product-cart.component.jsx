import { useContext, useState } from 'react'
import { ProductCardContainer, Footer } from './product-card.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { CartItemContext } from '../../contexts/cart.context'
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { items, setCartItem } = useContext(CartItemContext)
  const cartHandler = () => {
    setCartItem(product)
  }

  console.log('items: ', items)
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        children="Add to Cart"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={cartHandler}
      />
    </ProductCardContainer>
  )
}

export default ProductCard
