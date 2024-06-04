import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (componentMounted.current) {
          const products = await response.json();
          setData(products);
          setFilter(products);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const filterProducts = (category) => {
    if (category === 'All') {
      setFilter(data);
    } else {
      const updatedList = data.filter(item => item.category === category);
      setFilter(updatedList);
    }
  };

  const Loading = () => (
    <div className="flex items-center justify-center min-h-screen">
      Loading...
    </div>
  );

  const ShowProducts = () => (
    <>
      <div className="flex gap-3 justify-center items-center text-xl font-bold mb-5 pt-16 pm-5">
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts('All')}>All</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts('jewelery')}>Jewelery</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts('electronics')}>Electronics</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filter.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full product-card-ratio mb-4" />
            <h3 className="text-lg font-bold mb-2 truncate">{product.title}</h3>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <NavLink to={"/product"} className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition">Buy Now</NavLink>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
