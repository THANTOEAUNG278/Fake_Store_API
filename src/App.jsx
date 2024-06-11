
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import { CartProvider } from './component/CartContext';
import Cart from './component/Cart';

function App() {
  return (
    <>
    
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart/>}  />
          </Routes>
        </CartProvider>
   
    </>
  );
}

export default App;
