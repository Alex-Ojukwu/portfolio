"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import GithubIcon from "../../../public/github-icon.svg";

const navLinks = [
  { title: "About", path: "/#about" },
  { title: "Projects", path: "/#projects" },
  { title: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-12 py-4">
        <Link
          href="/"
          className="h-8 md:h-10 flex items-center text-white text-xl md:text-2xl font-semibold tracking-tight animate-blur-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          Alex-Ojukwu.
        </Link>

        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => (
            <Link
              key={link.title}
              href={link.path}
              className="text-sm text-white hover:text-gray-300 transition-colors animate-blur-fade-up"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden sm:flex items-center gap-2 liquid-glass rounded-full px-4 md:px-6 py-2 text-sm text-white hover:bg-white/10 transition-colors animate-blur-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            <Mail size={18} />
            <span>Hire Me</span>
          </Link>
          <a
            href="https://github.com/Alex-Ojukwu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden sm:flex w-10 h-10 rounded-full liquid-glass items-center justify-center hover:bg-white/10 transition-colors animate-blur-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <Image src={GithubIcon} alt="" width={18} height={18} />
          </a>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden relative w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white animate-blur-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            <Menu
              size={18}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen ? "rotate-180 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
              }`}
            />
            <X
              size={18}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-180 opacity-0 scale-50"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-[72px] left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl transition-all duration-500 ease-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.title}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`py-3 px-3 rounded-lg text-white hover:bg-gray-800/50 transition-all duration-500 ease-out ${
                menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
            >
              {link.title}
            </Link>
          ))}
          <div className="sm:hidden flex items-center gap-3 border-t border-gray-800 mt-3 pt-4 px-3 pb-1">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 liquid-glass rounded-full px-4 py-2 text-sm text-white"
            >
              <Mail size={18} />
              <span>Hire Me</span>
            </Link>
            <a
              href="https://github.com/Alex-Ojukwu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex w-10 h-10 rounded-full liquid-glass items-center justify-center"
            >
              <Image src={GithubIcon} alt="" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
