import Product from "./Product.jsx"
import ShoppingCart from "./ShoppingCart.jsx"
import { products } from "./../../data/data.jsx"
import { useState } from "react"

function Products() {
  let [shoppingCartList, setshoppingCartList] = useState([])

  function addToShoppingCart(product) {
    console.log("S", shoppingCartList)
    console.log("P", product)
    if (shoppingCartList.some(item => item.id === product.id)) {
      alert("The item was already added!")
    } else {
      setshoppingCartList(shoppingCartList.concat(product))
    }
  }
  return (
    <div className="products">
      {products.map((product) => {
        console.log(shoppingCartList)
        return <Product key={product.id} id={product.id} name={product.name} category={product.category} description={product.description} price={product.price} image={product.image} onShoppingCart={addToShoppingCart} />
      })}
      <ShoppingCart cartList={shoppingCartList}></ShoppingCart>
    </div>
  )
}

export default Products
