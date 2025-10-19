import { useState } from "react"

function ShoppingCart({ cartList }) {
  const [showForm, setshowForm] = useState(false)
  return (
    <div>
      <button onClick={() => setshowForm(toggle(showForm))} className="shopping-Btn">🛒</button>
      {showForm ? (
        <div className="shopping-cart shopping-cart-open" >
          <button onClick={() => setshowForm(false)}
            className="cross-Btn">&times;</button>
          {cartList.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((list) => {
                  return <tr key={list.id}><td className="itemTable">{list.name}</td><td className="priceTable">{list.price}€</td></tr>
                })}
                <tr><td className="totalPrice"><b>Total</b></td><td className="priceTable"><b>{cartList.reduce((sum, item) => sum + item.price, 0)}€</b></td></tr>
              </tbody>
            </table>) : undefined}
        </div>
      ) : undefined
      }
    </div >
  )
}

function toggle(bool_value) {
  return !bool_value
}

export default ShoppingCart
