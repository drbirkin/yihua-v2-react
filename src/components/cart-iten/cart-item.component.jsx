import './cart-item.styles.scss'

const CartItem = ({ product: { name, imageUrl, price, quantity } }) => {
  //   console.log('Cart')
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{`$${quantity * price}`}</span>
      </div>
    </div>
  )
}

export default CartItem
