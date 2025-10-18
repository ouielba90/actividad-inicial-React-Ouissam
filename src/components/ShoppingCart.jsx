import { useState } from "react"

function ShoppingCart() {
  const [showForm, setshowForm] = useState(false)

  return (
    <div>
      <button onClick={() => setshowForm(toggle(showForm))} className="shopping-Btn">🛒</button>
      {showForm ? (
        <div className="shopping-cart" >
          <button onClick={() => setshowForm(false)}
            className="cross-Btn">&times;</button>
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
