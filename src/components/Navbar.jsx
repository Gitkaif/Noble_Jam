import { useEffect, useState, useRef } from "react";
import { Menu, X, MapPin, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const navRef = useRef();
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center gap-3 group"
          >
            <span className="text-3xl font-extrabold tracking-wide text-gray-900 group-hover:opacity-90 transition-opacity">
              Noble
            </span>
            <span className="text-xl font-medium text-gray-600">&</span>
            <span className="text-3xl font-extrabold tracking-wide text-gray-900 group-hover:opacity-90 transition-opacity">
              Mayville
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-[15px] font-semibold uppercase tracking-wide text-gray-800 hover:text-red-600 transition-colors"
            >
              Home
            </a>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center gap-1 text-[15px] font-semibold uppercase tracking-wide text-gray-800 hover:text-red-600 transition-colors"
              >
                Our Products
                {isProductsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {isProductsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Explore Our Premium Range</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <a
                        href="#noble"
                        onClick={(e) => {
                          scrollToSection(e, 'noble');
                          setIsProductsOpen(false);
                        }}
                        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50 to-amber-50 p-6 hover:shadow-xl transition-all duration-300 group border border-red-100"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="relative">
                          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md">
                            <span className="text-4xl">🍓</span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Noble Jams</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">Premium fruit preserves crafted with finest ingredients</p>
                        </div>
                      </a>
                      <a
                        href="#mayville"
                        onClick={(e) => {
                          scrollToSection(e, 'mayville');
                          setIsProductsOpen(false);
                        }}
                        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 p-6 hover:shadow-xl transition-all duration-300 group border border-amber-100"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="relative">
                          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md">
                            <span className="text-4xl">🥚</span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Mayville</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">Delicious eggless mayonnaise for every meal</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#about-us"
              onClick={(e) => scrollToSection(e, 'about-us')}
              className="text-[15px] font-semibold uppercase tracking-wide text-gray-800 hover:text-red-600 transition-colors"
            >
              About us
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#products"
              onClick={(e) => scrollToSection(e, 'products')}
              className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-red-700 transition-colors"
            >
              <MapPin size={16} />
              Buy on amazon
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-900 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-1">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="block py-3 text-lg font-semibold text-gray-800 hover:bg-gray-50 px-4 rounded-lg"
            >
              Home
            </a>

            <div className="py-2">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full py-3 text-lg font-semibold text-left text-gray-800 hover:bg-gray-50 px-4 rounded-lg"
              >
                Our Products
                {isProductsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {isProductsOpen && (
                <div className="pl-6 mt-2 space-y-3">
                  <a
                    href="#noble"
                    onClick={(e) => scrollToSection(e, 'noble')}
                    className="block py-2.5 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🍓</span>
                      <div>
                        <div className="font-medium">Noble Jams</div>
                        <div className="text-sm text-gray-500">Premium fruit preserves</div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#mayville"
                    onClick={(e) => scrollToSection(e, 'mayville')}
                    className="block py-2.5 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🥚</span>
                      <div>
                        <div className="font-medium">Mayville</div>
                        <div className="text-sm text-gray-500">Eggless mayonnaise</div>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="#about-us"
              onClick={(e) => scrollToSection(e, 'about-us')}
              className="block py-3 text-lg font-semibold text-gray-800 hover:bg-gray-50 px-4 rounded-lg"
            >
              About us
            </a>

            <a
              href="#products"
              onClick={(e) => scrollToSection(e, 'products')}
              className="block py-3 text-lg font-semibold text-red-600 hover:bg-red-50 px-4 rounded-lg"
            >
              Buy on amazon
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;