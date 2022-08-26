import Component from 'react'
import Slider from '../Components/produits/Slider';
import { CartProvider} from "react-use-cart";
import Shop from '../Components/produits/productCard/Shop.js'
import Cart from '../Components/produits/productCard/Cart.js'
import Footer from '../Components/accueil/Footer';



class Products extends Component {
  render() {
    return (
      <div>
        <h1 className= 'text-center mt-5'></h1>
        <Slider/>
        <CartProvider>
          <Shop/>
          <Cart/>
        </CartProvider>
        <Footer/>
      </div>
    )
  }
}

export default Products;