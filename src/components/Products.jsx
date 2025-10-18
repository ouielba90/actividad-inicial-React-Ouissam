import Product from "./Product.jsx"
import "./../../data/data.jsx"
import { products } from "./../../data/data.jsx"

function Products() {
  //console.log(products)
  return (
    <div className="products">
      {products.map((product) => {
        return <Product key={product.id} name={product.name} category={product.category} description={product.description} price={product.price} image={product.image} />
      })}
    </div>
  )
}

export default Products
