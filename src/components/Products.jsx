import Product from "./Product.jsx"
import ShoppingCart from "./ShoppingCart.jsx"
import { products } from "./../../data/data.jsx"
import { useState } from "react"
import SearchBar from "./SearchBar.jsx"

function Products() {
  let [cartItems, setCartItems] = useState([])
  const [cartIDs, setCartIDs] = useState([]);
  const [productsOnQuery, setProductsOnQuery] = useState(products)
  const [selectedFilter, setSelectedFilter] = useState([]); // <--- ADD THIS
  const [query, setQuery] = useState("");



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

  function filterProducts(currentQuery, currentFilter) {
    const lowerQuery = currentQuery.toLowerCase();
    const activeCategory = currentFilter.find(item => item.selected);

    const filtered = products.filter(item => {
      const matchesQuery =
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery);

      const matchesCategory = activeCategory
        ? item.category === activeCategory.category
        : true;

      return matchesQuery && matchesCategory;
    });

    setProductsOnQuery(filtered);
  }

  function handleQuery(incomingQuery) {
    setQuery(incomingQuery);
    filterProducts(incomingQuery, selectedFilter);
  }

  function handleSelector(filter) {
    setSelectedFilter(filter);
    filterProducts(query, filter);
  }

  return (
    <>
      <SearchBar queryTransfer={handleQuery} selectTransfer={handleSelector} />
      <div className="product-list">
        {productsOnQuery.length > 0 ? productsOnQuery.map((product) => {
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
        }) : <div className="no-findings">No matches found 😕</div>
        }
        <ShoppingCart cartList={cartItems} removeFromCart={handleRemoveFromCart}></ShoppingCart>
      </div>
    </>
  )
}

export default Products
