import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-3 mx-auto px-4 sm:px-6 md:px-8">
        <span className="text-lg font-semibold tracking-tight text-white">
          Alex-Ojukwu.
        </span>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Alex-Ojukwu Nduka. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
