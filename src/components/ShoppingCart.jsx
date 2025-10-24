import { useState } from "react"
import trashBinIcon from "./../../public/images/trash-bin.png"

function ShoppingCart({ cartList, setCartList, removeFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const totalPrice = cartList.reduce((sum, item) => sum + item.price, 0)

  function renderCartItem(item) {
    return (<tr key={item.id}>
      <td className="itemTable">{item.name}</td>
      <td className="priceTable">{item.price}€</td>
      <td className="action-col">
        <button className="trash-Btn" onClick={() => handleRemoveProduct(item.id)}>
          <img src={trashBinIcon} />
        </button>
      </td>
    </tr>)
  }

  function renderWholeCard() {
    return (
      <div className="shopping-cart">
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
                    <th className="actionHeaderTable">Action</th>
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
    )
  }

  function handleRemoveProduct(productId) {
    setCartList(prev => prev.filter(item => item.id !== productId))
    removeFromCart(productId)
  }

  return (
    <div>
      <button onClick={() => setIsCartOpen(!isCartOpen)} className="shopping-Btn">🛒</button>
      <div className="items-basket-count">{cartList.length}</div>
      {isCartOpen ? (renderWholeCard()) : undefined}
    </div >
  )
}

export default ShoppingCart
