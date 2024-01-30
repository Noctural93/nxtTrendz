import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0

      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <>
          <div className="cartSummary-container">
            <h1 className="totalOrder-heading">
              Order Total: <span>Rs {total} /-</span>
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-btn-large">
              Checkout
            </button>
            <button type="button" className="checkout-btn-small">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
