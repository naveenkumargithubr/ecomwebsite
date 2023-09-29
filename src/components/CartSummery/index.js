import CartContext from '../../context/CartContext'
import './index.css'

const CartSummery = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0

      // adding the total items
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <>
          <div className="summery-container">
            <h1 className="order-total">
              Order Total: <span className="total-head">Rs {total}/-</span>
            </h1>
            <p className="desc-total">
              <span className="total-number">{cartList.length} </span>
              items in cart
            </p>
            <button type="button" className="remove-button">
              CheckOut
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummery
