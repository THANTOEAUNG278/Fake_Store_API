import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen p-10 py-16">
      <h1 className="text-4xl font-extrabold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-xl">Your cart is empty. <NavLink to="/products" className="text-indigo-600">Continue Shopping</NavLink></p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((product, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <img src={product.image} alt={product.title} className="w-full product-card-ratio mb-4" />
              <h3 className="text-lg font-bold mb-2 truncate">{product.title}</h3>
              <p className="text-gray-700 mb-2">${(product.price * product.quantity).toFixed(2)}</p>
              <div className="flex items-center justify-between">
                <button onClick={() => removeFromCart(product.id)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                <span className="px-2">{product.quantity}</span>
                <button onClick={() => addToCart(product)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                <button onClick={() => deleteFromCart(product.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
