import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🏞️ Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-24 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-300">ShopLite</span>
          </h1>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Discover premium products curated for quality, style, and everyday
            comfort.
          </p>
          <Link
            to="/products"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all shadow-lg">
            Shop Now
          </Link>
        </div>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120">
            <path
              d="M985.66 83.29c-76.8-10.5-160.1-27.35-243.93-47.45-129.48-30.51-259.76-66.64-389.23-49.33C231.74 2.9 116.3 54.55 0 107.09V120h1200V95.8c-69.02 10.95-139.38 19.05-214.34-12.51z"
              fill="#f9fafb"></path>
          </svg>
        </div>
      </section>

      {/* 🌟 Featured Categories */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Fashion",
              img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            },
            {
              name: "Electronics",
              img: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144",
            },
            {
              name: "Home Decor",
              img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            },
          ].map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {cat.name}
                </h3>
                <Link
                  to="/products"
                  className="text-cyan-600 hover:text-cyan-800 text-sm font-medium">
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💎 Why Choose ShopLite */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose ShopLite?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "ri-truck-line",
              title: "Fast Delivery",
              text: "Get your products delivered quickly and safely across India.",
            },
            {
              icon: "ri-shield-check-line",
              title: "Quality Guaranteed",
              text: "We handpick products to ensure quality, durability, and style.",
            },
            {
              icon: "ri-customer-service-2-line",
              title: "24/7 Support",
              text: "Our team is always ready to assist you — anytime, anywhere.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <i className={`${feature.icon} text-4xl text-cyan-500 mb-3`}></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✉️ CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the ShopLite Community</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Be the first to get exclusive deals, early product launches, and
          personalized recommendations.
        </p>
        <Link
          to="/products"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition shadow-lg">
          Start Shopping
        </Link>
      </section>
    </div>
  );
};

export default Home;
