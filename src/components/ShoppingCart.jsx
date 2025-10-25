import { useState, useRef } from "react"
import trashBinIcon from "./../../public/images/trash-bin.png"
import Draggable from "react-draggable";


function ShoppingCart({ cartList, removeFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const totalPrice = cartList.reduce((sum, item) => sum + (item.price * item.qty), 0)
  const cartRef = useRef(null);

  function renderCartItem(item) {
    return (
      <tr key={item.id}>
        <td className="itemTable">{item.name}</td>
        <td className="priceTable">{item.price}€</td>
        <td className="action-col">{item.qty}</td>
        <td className="priceTable">{item.price * item.qty}€</td>
        <td className="action-col">
          <button className="trash-Btn" onClick={() => handleRemoveProduct(item.id)}>
            <img src={trashBinIcon} />
          </button>
        </td>
      </tr>)
  }

  function renderWholeCard() {
    return (
      <Draggable nodeRef={cartRef}>
        <div className="shopping-cart" ref={cartRef}>
          <div className="shopping-cart-header">
            <button onClick={() => setIsCartOpen(false)} className="cross-Btn">&times;</button>
            <span>Your Cart</span>
          </div>

          {cartList.length > 0 ? (
            <>
              <div className="shopping-cart-items">
                <table>
                  <thead>
                    <tr>
                      <th className="itemTable">Item</th>
                      <th className="priceHeaderTable">Price</th>
                      <th className="actionHeaderTable">Qty</th>
                      <th className="priceHeaderTable">Subtotal</th>
                      <th className="actionHeaderTable"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartList.map((item, index) => renderCartItem(item, index))}
                  </tbody>
                </table>
              </div>

              <div className="shopping-cart-footer">
                <span>Total</span>
                <span>{totalPrice}€</span>
              </div>
            </>
          ) : (
            <div className="shopping-cart-items-empty">
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
      <button onClick={() => setIsCartOpen(!isCartOpen)} className="shopping-Btn">🛒</button>
      <div className="items-basket-count">{cartList.reduce((curr, item) => item.qty + curr, 0)}</div>
      {isCartOpen ? (renderWholeCard()) : undefined}
    </div >
  )
}

export default ShoppingCart
