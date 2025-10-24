
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const cartCount = useSelector((state) => state.cart.totalCount);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex flex-wrap justify-between items-center px-4 py-3 sm:px-6">
        {/* 🛍 Logo */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
          ShopLite
        </h1>

        {/* 🌐 Navigation */}
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500"
            }>
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500"
            }>
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500"
            }>
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500"
            }>
            Contact
          </NavLink>

          {/* 🛒 Cart Icon + Badge */}
          <div className="relative ml-2">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-2xl duration-200 ${
                  isActive
                    ? "text-cyan-500"
                    : "text-gray-700 hover:text-cyan-500"
                }`
              }>
              <i className="ri-shopping-cart-2-line"></i>
            </NavLink>

            {cartCount >= 0 && (
              <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

