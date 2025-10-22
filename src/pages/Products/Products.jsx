import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/Slice/ProductSlice";
import { addToCart } from "../../redux/Slice/CartSlice";
const Products = () => {
  const { items, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  // Fetch products from API
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  if (status === "Loading")
    return (
      <h1 className="text-center py-10 text-gray-500">Loading Products...</h1>
    );
  if (status === "Failed")
    return (
      <div className="text-center text-red-500">
        Failed to Load Products Please Try Again{" "}
      </div>
    );



  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Our Products
      </h2>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => {
          // const inCart = items.has(item.id);
          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-5 flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-44 h-44 object-contain mb-4 rounded"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title.length > 20
                  ? item.title.slice(0, 20) + "..."
                  : item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">${item.price}</p>

              {/* Button */}
              <button
                onClick={() => dispatch(addToCart(item))}
                className="mt-auto px-5 py-2 text-sm rounded-lg transition font-medium
                 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
                Add to Cart
              </button>
              <button
                className="mt-3 px-5 py-2 rounded-lg transition font-medium
                 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer" >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      {/* Cart count */}
      {/* <div className="mt-10 text-center">
        <p className="text-gray-700 font-medium">
          🛒 Items in Cart:{" "}
          <span className="text-blue-600 font-semibold">{items.size}</span>
        </p>
      </div> */}
    </div>
  );
};

export default Products;
