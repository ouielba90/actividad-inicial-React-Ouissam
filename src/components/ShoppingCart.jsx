import { useState, useRef } from "react"
import trashBinIcon from "/images/trash-bin.png"
import Draggable from "react-draggable";


function ShoppingCart({ cartList, removeFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const totalPrice = cartList.reduce((sum, item) => sum + (item.price * item.qty), 0)
  const cartRef = useRef(null);

  function renderCartItem(item) {
    return (
      <tr key={item.id}>
        <td className="cart__item-name">{item.name}</td>
        <td className="cart__item-price">{item.price}€</td>
        <td className="cart__item-actions">{item.qty}</td>
        <td className="cart__item-price">{item.price * item.qty}€</td>
        <td className="cart__item-actions">
          <button className="btn--remove-item" onClick={() => handleRemoveProduct(item.id)}>
            <img src={trashBinIcon} />
          </button>
        </td>
      </tr>)
  }

  function renderWholeCard() {
    return (
      <Draggable nodeRef={cartRef}>
        <div className="cart" ref={cartRef}>
          <div className="cart__header">
            <button onClick={() => setIsCartOpen(false)} className="btn--close-cart">&times;</button>
            <span>Your Cart</span>
          </div>

          {cartList.length > 0 ? (
            <>
              <div className="cart__items">
                <table>
                  <thead>
                    <tr>
                      <th className="cart__item-name">Item</th>
                      <th className="cart__header-price">Price</th>
                      <th className="cart__header-actions">Qty</th>
                      <th className="cart__header-price">Subtotal</th>
                      <th className="cart__header-actions"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartList.map((item, index) => renderCartItem(item, index))}
                  </tbody>
                </table>
              </div>

              <div className="cart__footer">
                <span>Total</span>
                <span>{totalPrice}€</span>
              </div>
            </>
          ) : (
            <div className="cart__empty">
              Your basket is empty
            </div>
          )}
        </div>
      </Draggable>
    )
  }

  function handleRemoveProduct(productId) {
    removeFromCart(productId)
  }

  return (
    <div>
      <button onClick={() => setIsCartOpen(!isCartOpen)} className="cart-toggle-btn">🛒</button>
      <div className="cart-item-count">{cartList.reduce((curr, item) => item.qty + curr, 0)}</div>
      {isCartOpen ? (renderWholeCard()) : undefined}
    </div >
  )
}

export default ShoppingCart
