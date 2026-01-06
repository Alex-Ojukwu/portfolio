import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0">
        <span className="text-base sm:text-lg">LOGO</span>
        <p className="text-slate-600 text-xs sm:text-sm">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
