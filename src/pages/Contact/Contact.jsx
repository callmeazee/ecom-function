import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We’d love to hear from you! Reach out for any queries, feedback, or
          support.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Our Office
              </h3>
              <p className="text-gray-600 mt-1">
                ShopLite Pvt. Ltd. <br />
                123 Market Street, Mumbai, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600 mt-1">
                <a
                  href="mailto:support@shoplite.com"
                  className="text-blue-600 hover:underline">
                  support@shoplite.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600 mt-1">+91 98765 43210</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
