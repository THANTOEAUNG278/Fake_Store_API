import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { MdStar } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import { CartContext } from "./CartContext";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification("Item added to cart!");
  };

  const Loading = () => {
    return (
      <div className="text-center text-xl py-10">
        <FiLoader />
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img className="w-[320px] h-auto rounded-lg" src={product.image} alt={product.title} />
        </div>
        <div className="md:w-1/2 md:pl-10 flex flex-col justify-between">
          <div>
            <h4 className="text-gray-500 text-sm uppercase mb-2">{product.category}</h4>
            <h1 className="text-4xl font-extrabold mb-4">{product.title}</h1>
            <div className="flex items-center text-yellow-500 mb-2">
              <span className="text-lg font-semibold">Rating: {product.rating && product.rating.rate}</span>
              <MdStar className="ml-2" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">${product.price}</h3>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="flex space-x-4">
              <button
                className="bg-indigo-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <NavLink
                to="/cart" onClick={() => handleAddToCart(product)}
                className="bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300">
                Place Your Order
              </NavLink>
            </div>
            {notification && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded">
                {notification} <NavLink to="/cart" className="text-indigo-600 underline">View Cart</NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      {loading ? <Loading /> : <ShowProduct />}
    </div>
  );
};

export default Product;
