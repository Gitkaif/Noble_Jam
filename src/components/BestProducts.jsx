import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Pineapple Jam",
    description:
      "Made with juicy, sun-ripened pineapples for a tropical burst of flavor.",
    heroImage: "/images/hero/pineapple-hero.png",
    bottleImage: "/images/pineapple-t.png",
    highlights: ["Tropical", "Fruity", "Smooth Spread"],
  },
  {
    id: 2,
    name: "Mixed Fruit Jam",
    description:
      "A perfect blend of multiple fruits in every bite.",
    heroImage: "/images/hero/mixed-fruit-hero.png",
    bottleImage: "/images/mixed-fruit.png",
    highlights: ["Balanced", "Fruity", "All-Time Favorite"],
  },
  {
    id: 3,
    name: "Mango Jam",
    description:
      "Rich Alphonso mango flavor with a smooth, indulgent texture.",
    heroImage: "/images/hero/mango-hero.png",
    bottleImage: "/images/mango-t.png",
    highlights: ["Rich", "Tropical", "Customer Favorite"],
  },
];

const BestProducts = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;

    const timer = setInterval(() => {
      setActiveProduct((prev) => {
        const currentIndex = products.findIndex(
          (p) => p.id === prev.id
        );
        return products[(currentIndex + 1) % products.length];
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovering]);

  const displayedProduct = hoveredProduct ?? activeProduct;

  return (
    <section
      className="
        w-full
        py-20
        bg-[#f9f7f3]
        relative
        overflow-visible 
      "
      style={{ backgroundImage: 'url("/images/brand-bg2.jpg")' }}
    >
      {/* 🔥 CUTOUT FRUIT BETWEEN SECTIONS
      <img
        src="/images/fruit-cut-left.png"
        alt="Fruit cutout"
        className="
          absolute
          -top-32
          left-[-40px]
          w-40
          md:w-52
          lg:w-64
          rotate-[-8deg]
          z-30
          pointer-events-none
          drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]
        "
      /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:pl-6 xl:pl-10 lg:-mt-8 ml-18">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
              Premium Selection
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-6">
              Picked The Most
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={displayedProduct.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-gray-700 mb-6 max-w-md">
                  {displayedProduct.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {displayedProduct.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full bg-white shadow-sm border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="px-8 py-3.5 rounded-full bg-gradient-to-r bg-red-600 text-white font-medium shadow-lg">
                  Buy on Amazon
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE */}
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setHoveredProduct(null);
            }}
          >
            <div className="flex flex-col items-center lg:items-end space-y-6">

              {/* HERO IMAGE */}
              <div className="relative inline-flex rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-amber-50 to-white p-1.5 w-full max-w-lg xl:max-w-xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={displayedProduct.id}
                    src={displayedProduct.heroImage}
                    alt={displayedProduct.name}
                    className="w-full h-auto max-h-[420px] lg:max-h-[460px] object-contain"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              {/* BOTTLE SELECTOR */}
              <div className="flex justify-center gap-4 p-4 rounded-2xl shadow-inner lg:max-w-lg xl:max-w-xl mx-auto">
                {products.map((product) => {
                  const isActive = displayedProduct.id === product.id;

                  return (
                    <motion.button
                      key={product.id}
                      onMouseEnter={() => setHoveredProduct(product)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      onClick={() => setActiveProduct(product)}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex-1 max-w-[96px] rounded-xl p-2 transition-all ${
                        isActive
                          ? "bg-amber-100 ring-2 ring-amber-400/40 shadow-md"
                          : "hover:bg-white"
                      }`}
                    >
                      <div className="aspect-[3/4] flex items-center justify-center">
                        <img
                          src={product.bottleImage}
                          alt={product.name}
                          className={`w-full h-full object-contain ${
                            isActive ? "scale-110" : "opacity-80"
                          }`}
                        />
                      </div>
                    </motion.button>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestProducts;
