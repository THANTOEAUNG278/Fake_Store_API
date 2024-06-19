import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { NavLink } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

  const calculateTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const shippingHandling = 5.99;
  const totalAmount = (parseFloat(calculateSubtotal()) + shippingHandling).toFixed(2);

  return (
    <div className="min-h-screen p-10 bg-gray-100 py-16">
      <h1 className="text-4xl font-extrabold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-xl">Your cart is empty. <NavLink to="/products" className="text-indigo-600">Continue Shopping</NavLink></p>
      ) : (
        <div className="space-y-4">
          {cart.map((product, index) => (
            <div key={index} className="border p-4 rounded shadow-lg bg-white flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex flex-col justify-center items-center mb-4 md:mb-0">
                <img src={product.image} alt={product.title} className="w-32 h-32 object-contain rounded mr-[55px]" />
                <div>
                  <p className="text-gray-700 font-bold mx-5 my-2">${(product.price ).toFixed(2)}</p>
                  <div className="flex items-center">
                    <button onClick={() => removeFromCart(product.id)} className="px-3 py-1 font-bold bg-gray-300 rounded">-</button>
                    <span className="px-3 font-bold">{product.quantity}</span>
                    <button onClick={() => addToCart(product)} className="px-3 py-1 font-bold bg-gray-300 rounded">+</button>
                    <button onClick={() => deleteFromCart(product.id)} className="px-3 py-1 bg-red-500 text-2xl mx-2 text-white rounded"><MdDelete /></button>
                  </div>
                </div>
              </div>
              <div className="md:w-3/4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-8 p-4 border-t-2">
            <h2 className="text-2xl font-bold flex justify-end mb-4 underline">Order Summary</h2>
            <div className="flex justify-end gap-20 mb-2">
              <span>Items ({calculateTotalItems()}):</span>
              <span>${calculateSubtotal()}</span>
            </div>
            <div className="flex justify-end gap-20 mb-2">
              <span>Shipping & Handling:</span>
              <span>${shippingHandling.toFixed(2)}</span>
            </div>
            <div className="flex justify-end gap-16 font-bold text-lg mb-4">
              <span>Order Total:</span>
              <span>${totalAmount}</span>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button className="bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300">Place Your Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
