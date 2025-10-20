import { useState } from "react"
import trashBinIcon from "./../../public/images/trash-bin.png"

function ShoppingCart({ cartList, setcartList }) {
  const [showForm, setshowForm] = useState(false)

  function onDeleteProduct(index) {
    setcartList(prevCartList =>
      [...prevCartList.slice(0, index), ...prevCartList.slice(index + 1)]
    )
  }
  return (
    <div>
      <button onClick={() => setshowForm(toggle(showForm))} className="shopping-Btn">🛒</button>
      <div className="items-basket-count">{cartList.length}</div>
      {showForm ? (
        <div className="shopping-cart shopping-cart-open" >
          <button onClick={() => setshowForm(false)}
            className="cross-Btn">&times;</button>
          {cartList.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="priceTable">Price</th>
                  <th className="action-col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((item, index) => {
                  return <tr key={item.id}>
                    <td className="itemTable">{item.name}</td>
                    <td className="priceTable">{item.price}€</td>
                    <td className="action-col">
                      <button className="trash-Btn" onClick={() => onDeleteProduct(index)}>
                        <img src={trashBinIcon} />
                      </button>
                    </td>
                  </tr>
                })}
                <tr>
                  <td className="totalPrice"><b>Total</b></td>
                  <td className="priceTable"><b>{cartList.reduce((sum, item) => sum + item.price, 0)}€</b></td>
                  <td className="priceTable"></td>
                </tr>
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
