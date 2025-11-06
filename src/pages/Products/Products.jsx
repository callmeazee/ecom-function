import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  filterByCategory,
} from "../../redux/Slice/ProductSlice";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../../redux/Slice/CartSlice";

const Products = () => {
  const [debounceInput, setDebounceInput] = useState("");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { filteredItems, categories, status } = useSelector(
    (state) => state.products
  );
  const { items: cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceInput(input);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "Loading")
    return (
      <h1 className="text-center py-10 text-gray-500">Loading Products...</h1>
    );
  if (status === "Failed")
    return (
      <div className="text-center text-red-500">Failed to load products.</div>
    );

  const searchedProducts = filteredItems.filter((item) =>
    item.title.toLowerCase().includes(debounceInput.toLowerCase())
  );

  const getCartItem = (id) => cartItems.find((i) => i.id === id);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 text-gray-800 bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <i className="ri-search-line absolute left-3 top-2.5 text-gray-500 text-lg"></i>
        </div>
      </div>

      {/* 🛍 Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h2>

      {/* 🧭 Category Filters */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              dispatch(filterByCategory(cat));
              setInput(""); // clear search when category changes
            }}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-cyan-100 hover:text-cyan-600 font-medium transition">
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* 🧾 Product Grid */}
      {searchedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {searchedProducts.map((item) => {
            const inCart = getCartItem(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-5 flex flex-col items-center text-center hover:shadow-lg transition">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title.length > 20
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">${item.price}</p>

                {!inCart ? (
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium">
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, change: -1 }))
                        }
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                        -
                      </button>
                      <span className="text-gray-700 font-semibold">
                        {inCart.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, change: 1 }))
                        }
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:text-red-600 text-sm font-medium">
                      Remove
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No products found for "{input}"
        </p>
      )}
    </div>
  );
};

export default Products;
