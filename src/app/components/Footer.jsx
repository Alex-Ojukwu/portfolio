import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-3 mx-auto px-4 sm:px-6 md:px-8">
        <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Alex-Ojukwu.
        </span>
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Alex-Ojukwu Nduka. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
