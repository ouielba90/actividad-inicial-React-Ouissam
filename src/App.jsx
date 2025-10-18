import './index.css'
import Header from "./components/Header.jsx"
import Products from "./components/Products.jsx"
import Footer from "./components/Footer.jsx"
import ShoppingCart from './components/ShoppingCart.jsx'

function App() {

  return (
    <div>
      <Header></Header>
      <ShoppingCart></ShoppingCart>
      <Products></Products>
      <Footer></Footer>
    </div>
  )
}

export default App
