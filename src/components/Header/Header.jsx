import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Header() {
  const { items: cartItems } = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
      <h1 className="text-2xl font-bold text-gray-800">ShopLite</h1>
      <nav className="flex gap-6 text-gray-600">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 " : "text-black"
          }>
          Home
        </NavLink>
        <NavLink
          to="Products"
          className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-black"
          }>
          Products
        </NavLink>
        <NavLink
          to="About"
          className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-black"
          }>
          About
        </NavLink>
        <NavLink
          to="Contact"
          className={({ isActive }) =>
            `duration-200 ${
              isActive ? "text-cyan-400" : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-400 lg:p-0`
          }>
          Contact
        </NavLink>
        <NavLink
          to="Cart"
          className={({ isActive }) =>
            `duration-200 ${
              isActive ? "text-cyan-400" : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-400 lg:p-0`
          }>
          <i className="ri-shopping-cart-2-line text-lg"></i>
          {cartCount >=0 && (
            <span className="absolute top-2 right-2 bg-cyan-500 text-white text-xs font-semibold rounded-full px-2 py-1">
              {cartCount}
            </span>
          )}
          {/* <span className=""></span> */}
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
