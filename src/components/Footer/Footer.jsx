import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 py-4 border-t mt-10 text-sm">
      © {new Date().getFullYear()} ShopLite. All rights reserved.
    </footer>
  );
};

export default Footer;
