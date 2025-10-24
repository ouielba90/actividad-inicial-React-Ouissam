import Product from "./Product.jsx"
import ShoppingCart from "./ShoppingCart.jsx"
import { products } from "./../../data/data.jsx"
import { useState } from "react"
import SearchBar from "./SearchBar.jsx"

function Products() {
  let [cartItems, setCartItems] = useState([])
  const [cartIDs, setCartIDs] = useState([]);
  const [productsOnQuery, setProductsOnQuery] = useState(products)

  function handleAddToCart(product) {
    if (!cartIDs.includes(product.id)) {
      setCartItems(prev => [...prev, product]);
      //setCartItems([...cartItems, product]);
      setCartIDs(prev => [...prev, product.id]);
      //setCartIDs([...cartIDs, product.id]);
    }
  }
  function handleRemoveFromCart(productId) {
    setCartItems(prev => prev.filter(item => item.id !== productId))
    //setCartItems(cartItems.filter(item => item.id !== productId))
    setCartIDs(prev => prev.filter(itemId => itemId !== productId))
    //setCartIDs(cartIDs.filter(itemId => itemId !== productId))
  }
  function handleQuery(query) {
    console.log(productsOnQuery, query)
    setProductsOnQuery(products.filter(
      item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    )
    )
  }
  return (
    <>
      <SearchBar queryTransfer={handleQuery} />
      <div className="products">
        {productsOnQuery.map((product) => {
          // return <Product key={product.id} {...product}/> // Another way
          return <Product
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
            onAddToCart={() => handleAddToCart(product)}
            disabledButtonIds={cartIDs}
          />
        })}
        <ShoppingCart cartList={cartItems} setCartList={setCartItems} removeFromCart={handleRemoveFromCart}></ShoppingCart>
      </div>
    </>
  )
}

export default Products
