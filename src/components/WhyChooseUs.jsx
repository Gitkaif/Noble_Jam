// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const nobleFeatures = [
    { icon: "🍓", text: "Timeless Recipes" },
    { icon: "🍯", text: "Rich Fruit-Forward Taste" },
    { icon: "🕰️", text: "Crafted with Tradition" },
  ];

  const mayvilleFeatures = [
    { icon: "🥚", text: "100% Eggless" },
    { icon: "🥪", text: "Ultra Creamy Texture" },
    { icon: "🇮🇳", text: "Made for Indian Kitchens" },
  ];

  return (
    <section className="relative w-full py-24 " 
    style={{
    backgroundImage: 'url("/images/mayville_bg.png")', // neutral bg
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    }}
    >
      {/* soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed italic">
            “At Noble &amp; Mayville, taste is more than flavour it is memory.
            A morning toast layered with rich sweetness, evening snacks dipped
            in creamy indulgence.”
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-20">
          {/* Noble */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative rounded-3xl bg-white border border-amber-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-10 hover:-translate-y-1 transition-all duration-300"
          >
            {/* accent */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-amber-400 to-red-400" />

            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-amber-800 mb-1 tracking-wide">
                NOBLE
              </h3>
              <p className="text-amber-700 font-medium">
                Heritage Fruit Jams
              </p>
            </div>

            <ul className="space-y-5">
              {nobleFeatures.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-lg text-gray-700"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mayville */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative rounded-3xl bg-white border border-yellow-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-10 hover:-translate-y-1 transition-all duration-300"
          >
            {/* accent */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-yellow-400 to-lime-400" />

            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-yellow-700 mb-1 tracking-wide">
                MAYVILLE
              </h3>
              <p className="text-yellow-600 font-medium">
                Eggless Mayonnaise
              </p>
            </div>

            <ul className="space-y-5">
              {mayvilleFeatures.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-lg text-gray-700"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            One Promise. Two Experiences.
          </h3>
          <p className="text-xl text-gray-600">
            Crafted with care, consistency &amp; trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
