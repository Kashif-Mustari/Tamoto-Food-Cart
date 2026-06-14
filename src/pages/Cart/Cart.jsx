import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const {cartItems, food_list, removeFromCart} = useContext(StoreContext)
  const [promoCode, setPromoCode] = useState('')
  const [isPromoApplied, setIsPromoApplied] = useState(false)
  const navigate = useNavigate()

  const subtotal = food_list.reduce((total, item) => {
    if (cartItems[item._id] > 0) {
      return total + item.price * cartItems[item._id]
    }
    return total
  }, 0)
  const deliveryFee = subtotal === 0 ? 0 : 2
  const discount = isPromoApplied ? subtotal * 0.1 : 0
  const total = subtotal + deliveryFee - discount

  const handleApplyPromo = () => {
    setIsPromoApplied(promoCode.trim().toUpperCase() === 'TOMATO10')
  }

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      {food_list.map((item)=>{
        if(cartItems[item._id] > 0) {
          return (
            <div key={item._id} className='cart-items-title cart-items-item'>
              <img src={item.image} alt="" /> 
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
            </div>
          )
        }
        return null
      })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Discount</p>
              <p>-${discount.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details cart-total-final">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} disabled={subtotal === 0}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(event) => setPromoCode(event.target.value)}
            />
            <button onClick={handleApplyPromo}>Apply</button>
          </div>
          {isPromoApplied && <span>Promo code applied: 10% discount</span>}
        </div>
      </div>
    </div>
  )
}

export default Cart
