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
      product["qty"] = 1
      setCartItems(prev => [...prev, product]);
      //setCartItems([...cartItems, product]);
      setCartIDs(prev => [...prev, product.id]);
      //setCartIDs([...cartIDs, product.id]);
    }
    if (cartIDs.includes(product.id)) {
      setCartItems(prev => {
        return prev.map(el => {
          return el.id === product.id ? { ...el, qty: el.qty + 1 } : el
        })
      });
      //setCartItems([...cartItems, product]);
    }
  }
  function handleRemoveFromCart(productId) {
    setCartItems(prev => prev.filter(item => item.id !== productId))
    //setCartItems(cartItems.filter(item => item.id !== productId))
    setCartIDs(prev => prev.filter(itemId => itemId !== productId))
    //setCartIDs(cartIDs.filter(itemId => itemId !== productId))
  }
  function handleQuery(query) {
    const lowerQuery = query.toLowerCase();
    setProductsOnQuery(
      products.filter(
        item =>
          item.name.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery)
      )
    );
  }
  return (
    <>
      <SearchBar queryTransfer={handleQuery} />
      <div className="product-list">
        {productsOnQuery.map((product) => {
          // return <Product key={product.id} {...product}/> // Another way if props are the same on both sides
          return <Product
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
            stock={product.stock}
            onAddToCart={() => handleAddToCart(product)}
            disabledButtonIds={cartIDs}
            quantity={cartItems.find(item => item.id === product.id)?.qty}
          />
        })}
        <ShoppingCart cartList={cartItems} removeFromCart={handleRemoveFromCart}></ShoppingCart>
      </div>
    </>
  )
}

export default Products
