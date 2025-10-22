import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          About <span className="text-cyan-500">ShopLite</span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Welcome to{" "}
          <span className="font-semibold text-gray-800">ShopLite</span>, your
          go-to destination for high-quality, thoughtfully curated products. We
          believe shopping should be{" "}
          <span className="text-cyan-600 font-medium">simple</span>,
          <span className="text-cyan-600 font-medium"> transparent</span>, and
          <span className="text-cyan-600 font-medium"> delightful</span>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <i className="ri-shopping-bag-3-line text-3xl text-cyan-500 mb-3"></i>
            <h3 className="font-semibold text-gray-800 mb-2">
              Curated Collection
            </h3>
            <p className="text-gray-500 text-sm">
              Every item is handpicked to ensure it meets our quality and style
              standards.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <i className="ri-heart-line text-3xl text-cyan-500 mb-3"></i>
            <h3 className="font-semibold text-gray-800 mb-2">Customer First</h3>
            <p className="text-gray-500 text-sm">
              We value your trust. Every order and interaction matters to us.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <i className="ri-leaf-line text-3xl text-cyan-500 mb-3"></i>
            <h3 className="font-semibold text-gray-800 mb-2">
              Sustainable Choices
            </h3>
            <p className="text-gray-500 text-sm">
              ShopLite promotes sustainable brands and eco-friendly packaging.
            </p>
          </div>
        </div>

        <p className="text-gray-600 mt-10 leading-relaxed">
          From fashion to lifestyle — we bring you products that blend quality
          with aesthetics. Our mission is to make every purchase feel personal
          and rewarding.
        </p>

        <button className="mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-md transition">
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default About;
