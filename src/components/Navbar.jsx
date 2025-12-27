import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "BLOG", path: "/blog" },
    { name: "RECIPES", path: "/recipes" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Changed from 10 to 50 for better effect
    };
    window.addEventListener("scroll", handleScroll);
    // Set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full h-24 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#b0d8d8] shadow-lg" : "bg-[#1a1113] backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ${scrolled ? "text-black" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Brand */}
        <Link
          to="/"
          className={`no-underline text-2xl ${scrolled ? "text-black" : "text-white"}`}
          style={{ fontFamily: "Lobster, cursive" }}
        >
          Noble Jam
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `no-underline uppercase tracking-wider text-lg pb-1 transition-colors duration-200
                ${
                  isActive
                    ? scrolled
                      ? "text-black"
                      : "text-white"
                    : scrolled
                    ? "text-black/80 hover:text-black"
                    : "text-white/80 hover:text-white"
                }`
              }
              style={{ fontFamily: "Lobster, cursive" }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://www.amazon.in/stores/page/82226F8A-BFF7-49BC-AB66-AAD004EF5779"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 border-2 rounded-full uppercase tracking-wider text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "border-red-600 text-red-600 hover:bg-red-600/10"
                : "border-red-600 text-white bg-red-600/90 hover:bg-red-600"
            }`}
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Shop on Amazon
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 shadow-lg bg-[#1e40af]">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="block py-2 text-black uppercase tracking-wider"
                style={{ fontFamily: "Lobster, cursive" }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="https://www.amazon.in/stores/page/82226F8A-BFF7-49BC-AB66-AAD004EF5779"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-black/80 hover:text-black uppercase tracking-wider"
              style={{ fontFamily: "Lobster, cursive" }}
              onClick={() => setIsOpen(false)}
            >
              Shop on Amazon
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;